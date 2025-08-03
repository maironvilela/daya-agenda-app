'use client';

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

const chartData = [
  { month: 'Janeiro', desktop: 186, mobile: 80, mabile2: 10 },
  { month: 'Fevereiro', desktop: 305, mobile: 200, mabile2: 20 },
  { month: 'Março', desktop: 237, mobile: 120, mabile2: 40 },
  { month: 'Abril', desktop: 73, mobile: 190, mabile2: 180 },
  { month: 'Maio', desktop: 209, mobile: 130, mabile2: 110 },
  { month: 'Junho', desktop: 214, mobile: 140, mabile2: 18 },
  { month: 'Julho', desktop: 150, mobile: 90, mabile2: 30 },
  { month: 'Agosto', desktop: 180, mobile: 110, mabile2: 87 },
  { month: 'Setembro', desktop: 220, mobile: 160, mabile2: 99 },
  { month: 'Outubro', desktop: 250, mobile: 170, mabile2: 80 },
  { month: 'Novembro', desktop: 300, mobile: 200, mabile2: 24 },
  { month: 'Dezembro', desktop: 400, mobile: 550, mabile2: 10 },
];

const chartConfig = {
  desktop: {
    label: 'Dr. Jader',
    color: '#2563eb',
  },
  mobile: {
    label: 'Dr. Savio',
    color: '#00FF00',
  },
  mabile2: {
    label: 'Dr. Tiago',
    color: '#2F4F4F',
  },
} satisfies ChartConfig;

type ChartProps = {
  className?: string;
  title: string;
};

export function Chart({ title, className }: ChartProps) {
  return (
    <div className={`${className}`}>
      <h3>{title}</h3>
      <ChartContainer
        config={chartConfig}
        className={` ${className} h-40 w-full`}
      >
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          <Bar dataKey="mabile2" fill="var(--color-mabile2)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
