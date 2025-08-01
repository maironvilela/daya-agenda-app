import { Loading } from "@/app/dashboard/components/loading";

import { DashboardInfo } from "@/app/dashboard/components/dashboard-info";
import { Agenda } from "@/app/dashboard/components/agenda";

import { ProximasCirurgias } from "@/app/dashboard/components/proximas-cirurgias";
import { useEffect, useState } from "react";
import { Chart } from "./components/charts";
import { CirurgiasAgendadas } from "./components/cirurgias-agendadas";
import { Activity } from "lucide-react";

export function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading && <Loading />}
      <div className="container mx-auto flex flex-col min-h-screen ">
        <main className="grid grid-cols-12 gap-2 ">
          <section className="col-span-8 space-y-2">
            <div className="bg-slate-900/50 border-slate-700/50 border-2 rounded-lg  flex flex-row h-12 items-center">
              <Activity />
              <h2 className="text-2xl">Dashboard</h2>
            </div>
            <div className="overflow-y-auto">
              <DashboardInfo />
              <div className="bg-slate-900/50 border-slate-700/50 border-2   rounded-lg p-4   col-span-2 backdrop-blur-sm flex flex-row gap-2 ">
                <Chart title="Cirurgias Realizadas" />
                <Chart title="Cirurgias Canceladas" />
              </div>
              <CirurgiasAgendadas />
            </div>
          </section>
          <section className="space-y-2 col-span-4 ">
            <Agenda />
            <ProximasCirurgias />
          </section>
        </main>
      </div>
    </div>
  );
}
