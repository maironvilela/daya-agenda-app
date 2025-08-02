"use client";

import { Download, RefreshCw, Shield, Terminal } from "lucide-react";
import { Item } from "@radix-ui/react-navigation-menu";
import { ItemOfSurgeries } from "../item-of-surgeries";
import { Items } from "./items";
import { useState } from "react";
import { Calendar } from "../calendar";

export function ProximasCirurgias() {
  return (
    <div className="bg-slate-900/50 border-slate-700/50 border-2  rounded-lg px-2 py-4 h-200 flex flex-col gap-8">
      <div className="space-y-6">
        <Calendar />
      </div>

      <div className="backdrop-blur-xl  px-2 overflow-y-scroll">
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
       </div>
    </div>
  );
}
