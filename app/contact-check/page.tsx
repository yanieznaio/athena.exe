import { Phone } from "lucide-react";
import { ContactList } from "../_components/dashboard/contact-list";
import { StatsCards } from "../_components/dashboard/stats-cards";

export default function Dashboard() {
  return (
    <div
      className="min-h-screen font-montreal"
      style={{ background: "#f9f5ec" }}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-black/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-2xl shadow-sm transition-transform hover:scale-105"
                style={{ background: "rgb(248, 254, 35)" }}
              >
                <Phone className="h-4 w-4 text-gray-900" strokeWidth={2.5} />
              </div>
              <div>
                <h1 className="text-base font-semibold text-gray-900 tracking-tight">
                  Athena.exe
                </h1>
                <p className="text-xs text-gray-500 hidden sm:block font-medium">
                  Appels automatisés
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div
                className="flex items-center gap-2 rounded-full px-3 py-1.5 shadow-sm border border-black/5"
                style={{ background: "rgba(248, 254, 35, 0.12)" }}
              >
                <div
                  className="h-1.5 w-1.5 rounded-full animate-pulse shadow-sm"
                  style={{ background: "rgb(248, 254, 35)" }}
                />
                <span className="text-xs font-semibold text-gray-700">
                  Actif
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <aside className="lg:w-80 shrink-0">
            <div className="rounded-3xl bg-white/70 backdrop-blur-2xl border border-black/5 shadow-lg p-5 transition-all hover:shadow-xl">
              <StatsCards />
            </div>
          </aside>
          <div className="flex-1 min-w-0 rounded-3xl bg-white/70 backdrop-blur-2xl border border-black/5 shadow-lg p-5 transition-all hover:shadow-xl">
            <ContactList />
          </div>
        </div>
      </main>
    </div>
  );
}
