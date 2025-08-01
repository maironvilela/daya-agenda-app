import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Calendar } from "lucide-react";

import { AlertItem } from "@/app/dashboard/components/alert-items";
import { useEffect, useState } from "react";
export function Agenda() {
  const [currentTime, setCurrentTime] = useState(new Date());

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  // Format date
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("pt-Br", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm h-88 overflow-scroll">
      <CardContent className="p-0">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 border-b border-slate-700/50">
          <div className="text-center">
            <div className="text-2xl font-mono text-cyan-400 mb-1">
              {formatTime(currentTime)}
            </div>
            <div className="text-sm text-slate-400">
              {formatDate(currentTime)}
            </div>
          </div>
        </div>
        <div className="space-y-3 p-4 overflow-scroll h-100">
          <div className="flex flex-row justify-center ">
            <Calendar className="mr-2 h-5 w-5" />

            <h2>Agenda</h2>
          </div>

          <AlertItem
            description="Cadastro Paciente Jose Teixeira"
            type="info"
          />
          <AlertItem description="paciente Jose Da Silva" type="warning" />
          <AlertItem
            description="Version 12.4.5 ready to install"
            type="update"
          />
          <AlertItem
            description="Incremental backup to drive E: successful"
            type="success"
          />
          <AlertItem
            description="Incremental backup to drive E: successful"
            type="success"
          />
          <AlertItem
            description="Incremental backup to drive E: successful"
            type="success"
          />
        </div>
      </CardContent>
    </Card>
  );
}
