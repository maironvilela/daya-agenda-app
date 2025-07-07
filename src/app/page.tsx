'use client';

import { Card } from '@/components/card';
import { Chart } from '@/components/charts';
import { ItemOfSurgeries } from '@/components/item-of-surgeries';
import { Paginator } from '@/components/paginator';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import BedPulse from '@/icons/bed-pulse.svg';
import ban from '@/icons/ban.svg';
import checkDouble from '@/icons/check-double.svg';

import Image from 'next/image';
import { Status } from '@/components/status';
import { Header } from '@/components/header';

// ...existing code...
export default function Home() {
  return (
    <div className="bg-gray-100 h-screen overflow-auto gap-2 w-screen">
      <Header title="Dashboard" />

      <main className="p-4">
        <header className="flex flex-row justify-around items-start flex-wrap  py-4 gap-4 ">
          <Card title="Cirurgias Agendadas" value={18}>
            <Image src={BedPulse} alt="Bed Pulse" width={30} height={30} />
          </Card>
          <Card title="Cirurgias Realizadas" value={18}>
            <Image src={ban} alt="Bed Pulse" width={30} height={30} />
          </Card>
          <Card title="Cirurgias Canceladas" value={18}>
            <Image src={checkDouble} alt="Bed Pulse" width={30} height={30} />
          </Card>
        </header>

        <div className=" flex flex-row justify-around items-start flex-wrap gap-4 py-4 bg-white mb-4">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 bg-white">
              Cirurgias Realizadas
            </h2>
            <Chart />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 bg-white">
              Cirurgias Canceladas
            </h2>

            <Chart />
          </div>
        </div>
        <div className="flex flex-row gap-4 h-full">
          <div className="grid grid-rows-2 flex-1 gap-4 rounded">
            <div className="  bg-white p-4 shadow rounded overflow-auto">
              <h1 className="text-2xl font-semibold text-gray-800 bg-white ">
                Pŕoximas cirurgias
              </h1>
              <Status />

              <ItemOfSurgeries
                patient="João da Silva"
                typeOfSurgery="Infiltração"
                status="pending"
              />
              <ItemOfSurgeries
                patient="João da Silva"
                typeOfSurgery="Infiltração"
                status="cancelled"
              />
              <ItemOfSurgeries
                patient="João da Silva"
                typeOfSurgery="Infiltração"
                status="scheduled"
              />
              <ItemOfSurgeries
                patient="João da Silva"
                typeOfSurgery="Infiltração"
                status="completed"
              />

              <div className="flex justify-end ">
                <Paginator
                  numberOfRecords={100}
                  itemsPerPage={10}
                  currentPage={1}
                  handleChangePage={() => {}}
                />
              </div>
            </div>

            <div className="  rounded">
              <div className="col-span-2 bg-white p-4 shadow rounded">
                <h1 className="text-2xl font-semibold text-gray-800 bg-white ">
                  Cirurgiar Agendadas Recentemente
                </h1>
                <Status />

                <ItemOfSurgeries
                  patient="João da Silva"
                  typeOfSurgery="Infiltração"
                  status="pending"
                />
                <ItemOfSurgeries
                  patient="João da Silva"
                  typeOfSurgery="Infiltração"
                  status="pending"
                />
                <ItemOfSurgeries
                  patient="João da Silva"
                  typeOfSurgery="Infiltração"
                  status="pending"
                />
                <ItemOfSurgeries
                  patient="João da Silva"
                  typeOfSurgery="Infiltração"
                  status="pending"
                />

                <div className="flex justify-end ">
                  <Paginator
                    numberOfRecords={100}
                    itemsPerPage={10}
                    currentPage={1}
                    handleChangePage={() => {}}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex bg-white overflow-x-hidden">
            <div className="xl:w-100 2xl:w-160">
              <div className="col-span-2 bg-white p-4 overflow-auto">
                <h1 className="text-2xl font-semibold text-gray-800 bg-white ">
                  Cirurgiar Agendadas
                </h1>
                <div className="p-4 rounded flex justify-center w-full bg-white">
                  <Calendar className="border border-blue-400 rounded-lg" />
                </div>
                <Status />
                <ul className="pb-6 overflow-auto h-[750px]">
                  <li>
                    <ItemOfSurgeries
                      patient="João da Silva"
                      typeOfSurgery="Infiltração"
                      status="pending"
                    />
                  </li>
                  <li>
                    <ItemOfSurgeries
                      patient="João da Silva"
                      typeOfSurgery="Infiltração"
                      status="pending"
                    />
                  </li>
                  <li>
                    <ItemOfSurgeries
                      patient="João da Silva"
                      typeOfSurgery="Infiltração"
                      status="pending"
                    />
                  </li>
                  <li>
                    <ItemOfSurgeries
                      patient="João da Silva"
                      typeOfSurgery="Infiltração"
                      status="pending"
                    />
                  </li>
                  <li>
                    <ItemOfSurgeries
                      patient="João da Silva"
                      typeOfSurgery="Infiltração"
                      status="pending"
                    />
                  </li>
                  <li>
                    <ItemOfSurgeries
                      patient="João da Silva"
                      typeOfSurgery="Infiltração"
                      status="pending"
                    />
                  </li>
                  <li>
                    <ItemOfSurgeries
                      patient="João da Silva"
                      typeOfSurgery="Infiltração"
                      status="pending"
                    />
                  </li>
                  <li>
                    <ItemOfSurgeries
                      patient="João da Silva"
                      typeOfSurgery="Infiltração"
                      status="pending"
                    />
                  </li>
                  <li>
                    <ItemOfSurgeries
                      patient="João da Silva"
                      typeOfSurgery="Infiltração"
                      status="pending"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
// ...existing code...
