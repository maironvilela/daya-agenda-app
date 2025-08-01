import { Activity } from "lucide-react";
import { DashboardCard } from "../dashboard-cards";

export function DashboardInfo() {
  return (
    <div className="bg-slate-900/50 border-slate-700/50 border-2 flex flex-row justify-around rounded-lg py-4">
      <DashboardCard
        title="Cirurgias Agendadas"
        value={50}
        icon={Activity}
        trend="up"
        color="purple"
      />
      <DashboardCard
        title="Cirurgias Aprovada"
        value={50}
        icon={Activity}
        trend="up"
        color="cyan"
      />
      <DashboardCard
        title="Cirurgias Pendente"
        value={50}
        icon={Activity}
        trend="up"
        color="green"
      />
    </div>
  );
}
