"use client";

import type React from "react";

import { useState, useRef } from "react";
import {
  Search,
  Plus,
  Phone,
  Mail,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Upload,
  Download,
} from "lucide-react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

type Contact = {
  id: string;
  name: string;
  phone: string;
  email: string;
  status: "valid" | "invalid" | "pending";
  lastCall?: string;
  callResult?: string;
};

const mockContacts: Contact[] = [];

export function ContactList() {
  const [search, setSearch] = useState("");
  const [contacts, setContacts] = useState<Contact[]>(mockContacts);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImportCSV = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      const lines = text.split("\n").filter((line) => line.trim());

      const contactData = lines.slice(1).map((line, index) => {
        const [name, phone, email] = line.split(",").map((item) => item.trim());
        return {
          id: `imported-${Date.now()}-${index}`,
          name,
          phone,
          email,
          status: "pending" as const,
        };
      });

      setContacts(contactData);
    };
    reader.readAsText(file);
  };

  const call = async () => {
    const modal = document.createElement("div");
    modal.style.cssText = `
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.45);
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: sans-serif;
    `;

    modal.innerHTML = `
      <div style="
        background: white;
        padding: 20px 28px;
        border-radius: 10px;
        max-width: 340px;
        text-align: center;
      ">
        <p style="margin-bottom: 18px; font-size: 16px;">
          Voulez-vous lancer l’appel ?
        </p>
        <button id="modalYes" style="padding: 8px 16px; margin-right: 8px;">Oui</button>
        <button id="modalNo" style="padding: 8px 16px;">Non</button>
      </div>
    `;

    document.body.appendChild(modal);

    // FIXED — safe typing with null check
    const userChoice = await new Promise((resolve) => {
      const yesBtn = document.querySelector<HTMLButtonElement>("#modalYes");
      const noBtn = document.querySelector<HTMLButtonElement>("#modalNo");

      if (!yesBtn || !noBtn) return resolve(false);

      yesBtn.onclick = () => resolve(true);
      noBtn.onclick = () => resolve(false);
    });

    modal.remove();

    if (!userChoice) {
      console.log("Appel annulé.");
      return;
    }

    console.log("calling");

    const headers = {
      Authorization:
        "org_ed301aca38662639d3ec1fee9d8e19d0db8af18f2205aed517f16ca9a7072dbd1d31d0bea73124a8ef8f69",
      "Content-Type": "application/json",
    };

    const data = {
      phone_number: "+33663816009",
      voice: "429bae88-a95f-4dd3-bc9e-d6c2c3a51efa",
      wait_for_greeting: false,
      record: true,
      answered_by_enabled: true,
      noise_cancellation: false,
      interruption_threshold: 500,
      block_interruptions: false,
      max_duration: 60,
      model: "base",
      language: "fr",
      background_track: "none",
      endpoint: "https://api.blend.ai",
      voicemail_action: "hangup",
      task: "Passer des appels téléphoniques automatiques...",
      first_sentence: "Bonjour, je suis Juliette de Athena.",
    };

    const response = await fetch("https://api.bland.ai/v1/calls", {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Erreur API Bland.ai: ${response.status} → ${text}`);
    }

    const result = await response.json();
    console.log(result);
  };

  const handleExportCSV = () => {
    const csvHeader = "Nom,Téléphone,Email,Statut,Dernier Appel,Résultat\n";
    const csvRows = contacts
      .map((contact) => {
        return [
          contact.name,
          contact.phone,
          contact.email,
          contact.status,
          contact.lastCall || "N/A",
          contact.callResult || "N/A",
        ].join(",");
      })
      .join("\n");

    const csvContent = csvHeader + csvRows;
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `contacts-results-${new Date().toISOString().split("T")[0]}.csv`
    );
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(search.toLowerCase()) ||
      contact.phone.includes(search) ||
      contact.email.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusBadge = (status: Contact["status"]) => {
    switch (status) {
      case "valid":
        return (
          <Badge
            variant="success"
            className="bg-success/10 text-success hover:bg-success/20"
          >
            <CheckCircle2 className="mr-1 h-3 w-3" />
            {"Validé"}
          </Badge>
        );

      case "invalid":
        return (
          <Badge
            variant="error"
            className="bg-destructive/10 text-destructive hover:bg-destructive/20"
          >
            <XCircle className="mr-1 h-3 w-3" />
            {"Invalide"}
          </Badge>
        );

      case "pending":
        return (
          <Badge
            variant="warning"
            className="bg-warning/10 text-warning hover:bg-warning/20"
          >
            <AlertCircle className="mr-1 h-3 w-3" />
            {"En attente"}
          </Badge>
        );
    }
  };

  return (
    <Card className="border-0 bg-card/80 backdrop-blur-xl shadow-sm">
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-foreground">
              {"Contacts"}
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              {"Gérez votre base de contacts"}
            </p>
          </div>
          <div className="flex gap-2">
            <input
              ref={fileInputRef}
              type="file"
              accept=".csv"
              onChange={handleImportCSV}
              className="hidden"
            />
            <Button
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
              className="rounded-xl"
            >
              <Upload className="h-4 w-4 mr-1.5" />
              {"Importer CSV"}
            </Button>
            <Button
              variant="outline"
              onClick={handleExportCSV}
              className="rounded-xl bg-transparent"
            >
              <Download className="h-4 w-4 mr-1.5" />
              {"Exporter"}
            </Button>
          </div>
        </div>

        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Rechercher un contact..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 rounded-xl border-border bg-background"
          />
        </div>

        <div className="space-y-2">
          {filteredContacts.map((contact) => (
            <div
              onClick={() => call()}
              key={contact.id}
              className="group flex items-center justify-between rounded-xl border border-border bg-background p-3 transition-all hover:border-primary/50 hover:shadow-sm"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <span className="text-sm font-semibold">
                    {contact.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="text-sm font-medium text-foreground truncate">
                      {contact.name}
                    </p>
                    {getStatusBadge(contact.status)}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Phone className="h-3 w-3" />
                      {contact.phone}
                    </span>
                    <span className="hidden sm:inline">{"•"}</span>
                    <span className="flex items-center gap-1">
                      <Mail className="h-3 w-3" />
                      {contact.email}
                    </span>
                  </div>

                  {contact.lastCall && (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                      <span>
                        {"Dernier appel: "}
                        {contact.lastCall}
                      </span>
                      {contact.callResult && (
                        <>
                          <span>{"•"}</span>
                          <span className="text-foreground">
                            {contact.callResult}
                          </span>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <Button
                onClick={() => call()}
                variant="ghost"
                className="rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                disabled={contact.status !== "valid"}
              >
                <Phone className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
