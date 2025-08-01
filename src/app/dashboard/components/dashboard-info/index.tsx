import { Activity } from "lucide-react";
import { DashboardCard } from "../dashboard-cards";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function DashboardInfo() {
  return (
    <div className="bg-slate-900/50 border-slate-700/50 border-2 rounded-lg p-4">
      <Carousel>
        <CarouselContent>
          <CarouselItem className="basis-1/3">
            <DashboardCard
              title="Cirurgias Agendadas"
              value={10}
              icon={Activity}
              trend="up"
              color="purple"
            />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <DashboardCard
              title="Cirurgias Aprovada"
              value={20}
              icon={Activity}
              trend="up"
              color="cyan"
            />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <DashboardCard
              title="Cirurgias Pendente"
              value={30}
              icon={Activity}
              trend="up"
              color="green"
            />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <DashboardCard
              title="Cirurgias Pendente"
              value={40}
              icon={Activity}
              trend="up"
              color="green"
            />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <DashboardCard
              title="Cirurgias Pendente"
              value={50}
              icon={Activity}
              trend="up"
              color="green"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
