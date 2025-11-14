import { Phone } from "lucide-react";
import { ContactList } from "../_components/dashboard/contact-list";
import { StatsCards } from "../_components/dashboard/stats-cards";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 border-b border-gray-300/40 bg-white/70 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-500">
                <Phone className="h-4 w-4 text-yellow-100" />
              </div>
              <div>
                <h1 className="text-base font-semibold tracking-tight text-gray-900">
                  {"Athena.exe"}
                </h1>
                <p className="text-xs text-gray-700 hidden sm:block">
                  {"Appels automatisés"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 rounded-full bg-gray-100 px-2.5 py-1">
                <div className="h-1.5 w-1.5 rounded-full bg-yellow-600 animate-pulse" />
                <span className="text-xs font-medium text-gray-700">
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
