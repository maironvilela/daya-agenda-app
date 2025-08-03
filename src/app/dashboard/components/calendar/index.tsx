'use client';

import * as React from 'react';
import { parseDate } from 'chrono-node';
import { Calendar1, CalendarIcon, Filter } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Calendar as CalendarUI } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { SchedulingFilter } from '../scheduling-filter';

function formatDate(date: Date | undefined) {
  if (!date) {
    return '';
  }

  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

export function Calendar() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('In 2 days');
  const [date, setDate] = React.useState<Date | undefined>(
    parseDate(value) || undefined
  );
  const [month, setMonth] = React.useState<Date | undefined>(date);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row  gap-2 px-2 items-center justify-between ">
        <div className="flex flex-row gap-2">
          <Calendar1 />
          <span> Agendamentos </span>
        </div>
        <SchedulingFilter />
      </div>
      <div className="relative flex gap-2">
        <Input
          id="date"
          value={value}
          placeholder="Tomorrow or next week"
          className="bg-background pr-10"
          onChange={(e) => {
            setValue(e.target.value);
            const date = parseDate(e.target.value);
            if (date) {
              setDate(date);
              setMonth(date);
            }
          }}
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown') {
              e.preventDefault();
              setOpen(true);
            }
          }}
        />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              id="date-picker"
              variant="ghost"
              className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
            >
              <CalendarIcon className="size-3.5 " />
              <span className="sr-only">Select date</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto overflow-hidden p-0 bg-slate-900 border-slate-700/50 border-2 text-amber-50"
            align="end"
          >
            <CalendarUI
              mode="single"
              selected={date}
              captionLayout="dropdown"
              month={month}
              onMonthChange={setMonth}
              onSelect={(date) => {
                setDate(date);
                setValue(formatDate(date));
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
