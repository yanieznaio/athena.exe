import { Phone } from "lucide-react";
import { ContactList } from "../_components/dashboard/contact-list";
import { StatsCards } from "../_components/dashboard/stats-cards";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-cream font-montreal cream">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-yellow">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900 tracking-tight">
                  Athena.exe
                </h1>
                <p className="text-sm text-gray-500 hidden sm:block">
                  Appels automatisés
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 shadow-inner">
                <div className="h-2 w-2 rounded-full bg-yellow animate-pulse" />
                <span className="text-sm font-medium text-gray-700">Actif</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 cream">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-80 shrink-0">
            <StatsCards className="rounded-2xl shadow-md bg-white p-4" />
          </aside>
          <div className="flex-1 min-w-0 rounded-2xl shadow-md bg-white p-4">
            <ContactList />
          </div>
        </div>
      </main>
    </div>
  );
}
