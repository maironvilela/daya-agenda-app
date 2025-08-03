import { Button } from '@radix-ui/themes';
import { ItemOfSurgeries } from '../item-of-surgeries';
import { Paginator } from '../paginator';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarArrowUp,
} from 'lucide-react';

export function CirurgiasAgendadas() {
  return (
    <div className="bg-slate-900/50 border-slate-700/50 border-2  rounded-lg p-4 full col-span-2 backdrop-blur-sm  ">
      <div className="flex flex-col gap-2 pb-4">
        <div className="flex flex-row  gap-2 pb-4 items-center ">
          <CalendarArrowUp />
          <span> Próximas Cirurgias </span>
        </div>

        <ItemOfSurgeries
          patient="Joaquim"
          typeOfSurgery="Cirurgia de Cabeca"
          status="scheduled"
        />
        <ItemOfSurgeries
          patient="Joaquim"
          typeOfSurgery="Cirurgia de Cabeca"
          status="scheduled"
        />
        <ItemOfSurgeries
          patient="Joaquim"
          typeOfSurgery="Cirurgia de Cabeca"
          status="completed"
        />
        <ItemOfSurgeries
          patient="Joaquim"
          typeOfSurgery="Cirurgia de Cabeca"
          status="completed"
        />

        <ItemOfSurgeries
          patient="Joaquim"
          typeOfSurgery="Cirurgia de Cabeca"
          status="completed"
        />

        <ItemOfSurgeries
          patient="Joaquim"
          typeOfSurgery="Cirurgia de Cabeca"
          status="completed"
        />
      </div>
      <div className="flex gap-2 justify-center items-center">
        <Button>
          <ArrowLeft />
        </Button>
        <span>Pagia 01 de 05</span>
        <Button>
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
