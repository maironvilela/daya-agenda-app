import { Download, RefreshCw, Shield, Terminal } from "lucide-react";

import Calendar from "react-calendar";
import { Item } from "@radix-ui/react-navigation-menu";
import { ItemOfSurgeries } from "../item-of-surgeries";

export function ProximasCirurgias() {
  return (
    <div className="bg-slate-900/50 border-slate-700/50 border-2  rounded-lg p-4 h-176 flex flex-col gap-4">
      <div className="space-y-6">
        <h2>Cirurgias Agendadas</h2>
        <Calendar className="  rounded-lg" />
      </div>

      <div className="flex flex-col gap-3 py-2 overflow-auto custom-scrollbar ">
        <div>
          <div
            className={`px-2  hover:bg-gray-50 transition-colors duration-150 border-l-6 border-red-500 `}
          >
            <div className="flex justify-between  l-2 items-center">
              <div className="flex items-start space-x-4">
                <div>
                  <p className="font-medium">Jose Da Silva</p>
                  <p className=" text-sm text-gray-500">Dr. Sávio Laborne</p>
                </div>
              </div>
              <div className="text-right  ">
                <p className="text-sm text-gray-500">09:00 - 12:00</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`px-2  hover:bg-gray-50 transition-colors duration-150 border-l-6 border-red-500 mb-4`}
          >
            <div className="flex justify-between  l-2 items-center">
              <div className="flex items-start space-x-4">
                <div>
                  <p className="font-medium">Jose Da Silva</p>
                  <p className=" text-sm text-gray-500">Dr. Sávio Laborne</p>
                </div>
              </div>
              <div className="text-right  ">
                <p className="text-sm text-gray-500">09:00 - 12:00</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`px-2  hover:bg-gray-50 transition-colors duration-150 border-l-6 border-red-500 mb-4`}
          >
            <div className="flex justify-between  l-2 items-center">
              <div className="flex items-start space-x-4">
                <div>
                  <p className="font-medium">Jose Da Silva</p>
                  <p className=" text-sm text-gray-500">Dr. Sávio Laborne</p>
                </div>
              </div>
              <div className="text-right  ">
                <p className="text-sm text-gray-500">09:00 - 12:00</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`px-2  hover:bg-gray-50 transition-colors duration-150 border-l-6 border-red-500 mb-4`}
          >
            <div className="flex justify-between  l-2 items-center">
              <div className="flex items-start space-x-4">
                <div>
                  <p className="font-medium">Jose Da Silva</p>
                  <p className=" text-sm text-gray-500">Dr. Sávio Laborne</p>
                </div>
              </div>
              <div className="text-right  ">
                <p className="text-sm text-gray-500">09:00 - 12:00</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`px-2  hover:bg-gray-50 transition-colors duration-150 border-l-6 border-red-500 mb-4`}
          >
            <div className="flex justify-between  l-2 items-center">
              <div className="flex items-start space-x-4">
                <div>
                  <p className="font-medium">Jose Da Silva</p>
                  <p className=" text-sm text-gray-500">Dr. Sávio Laborne</p>
                </div>
              </div>
              <div className="text-right  ">
                <p className="text-sm text-gray-500">09:00 - 12:00</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`px-2  hover:bg-gray-50 transition-colors duration-150 border-l-6 border-red-500 mb-4`}
          >
            <div className="flex justify-between  l-2 items-center">
              <div className="flex items-start space-x-4">
                <div>
                  <p className="font-medium">Jose Da Silva</p>
                  <p className=" text-sm text-gray-500">Dr. Sávio Laborne</p>
                </div>
              </div>
              <div className="text-right  ">
                <p className="text-sm text-gray-500">09:00 - 12:00</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`px-2  hover:bg-gray-50 transition-colors duration-150 border-l-6 border-red-500 mb-4`}
          >
            <div className="flex justify-between  l-2 items-center">
              <div className="flex items-start space-x-4">
                <div>
                  <p className="font-medium">Jose Da Silva</p>
                  <p className=" text-sm text-gray-500">Dr. Sávio Laborne</p>
                </div>
              </div>
              <div className="text-right  ">
                <p className="text-sm text-gray-500">09:00 - 12:00</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`px-2  hover:bg-gray-50 transition-colors duration-150 border-l-6 border-red-500 mb-4`}
          >
            <div className="flex justify-between  l-2 items-center">
              <div className="flex items-start space-x-4">
                <div>
                  <p className="font-medium">Jose Da Silva</p>
                  <p className=" text-sm text-gray-500">Dr. Sávio Laborne</p>
                </div>
              </div>
              <div className="text-right  ">
                <p className="text-sm text-gray-500">09:00 - 12:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
