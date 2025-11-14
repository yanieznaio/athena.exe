import { Phone } from "lucide-react";
import { ContactList } from "../_components/dashboard/contact-list";
import { StatsCards } from "../_components/dashboard/stats-cards";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
                <Phone className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-base font-semibold tracking-tight text-foreground">
                  {"Athena.exe"}
                </h1>
                <p className="text-xs text-muted-foreground hidden sm:block">
                  {"Appels automatisés"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1">
                <div className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                <span className="text-xs font-medium text-success">
                  {"Actif"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <aside className="lg:w-80 shrink-0">
            <StatsCards />
          </aside>
          <div className="flex-1 min-w-0">
            <ContactList />
          </div>
        </div>
      </main>
    </div>
  );
}
