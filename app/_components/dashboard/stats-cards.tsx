"use client";

import { Phone, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { Card } from "./ui/card";

export function StatsCards() {
  const stats = [
    {
      label: "Appels réussis",
      value: "142",
      change: "+12%",
      icon: CheckCircle2,
      color: "black",
      bgColor: "rgb(248, 254, 35)",
    },
    {
      label: "En attente",
      value: "8",
      change: "-3",
      icon: Clock,
      color: "black",
      bgColor: "rgb(248, 254, 35)",
    },
    {
      label: "Échecs",
      value: "5",
      change: "-2",
      icon: AlertCircle,
      color: "black",
      bgColor: "rgb(248, 254, 35)",
    },
    {
      label: "Total contacts",
      value: "328",
      change: "+24",
      icon: Phone,
      color: "black",
      bgColor: "rgb(248, 254, 35)",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        {stats.slice(0, 4).map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card
              key={index}
              className="border-0 bg-card/80 backdrop-blur-xl shadow-sm transition-all hover:shadow-md"
            >
              <div className="p-3">
                <div className="flex flex-col gap-2">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-lg self-start"
                    style={{ background: stat.bgColor }}
                  >
                    <Icon
                      className="h-4 w-4"
                      style={{ color: stat.color, opacity: 1 }}
                    />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">
                      {stat.label}
                    </p>
                    <p className="mt-1 text-xl font-semibold tracking-tight text-foreground">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {stat.change}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {stats.length > 4 && (
        <div className="flex justify-center">
          {stats.slice(4).map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index + 4}
                className="border-0 bg-card/80 backdrop-blur-xl shadow-sm transition-all hover:shadow-md w-full max-w-xs"
              >
                <div className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-xs font-medium text-muted-foreground">
                        {stat.label}
                      </p>
                      <p className="mt-1.5 text-2xl font-semibold tracking-tight text-foreground">
                        {stat.value}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {stat.change} {"ce mois"}
                      </p>
                    </div>
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ background: stat.bgColor }}
                    >
                      <Icon
                        className="h-5 w-5"
                        style={{ color: stat.color, opacity: 1 }}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
