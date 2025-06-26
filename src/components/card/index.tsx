import { ReactNode } from 'react';

type CardProps = {
  children?: ReactNode;
  title: string;
  value: number;
};

export function Card({ title, value, children }: CardProps) {
  return (
    <div className="status-card bg-white rounded-xl shadow p-6 flex-1 items-center flex flex-row gap-4">
      <div className="p-3 rounded-full bg-blue-100 text-blue-600 w-12">
        {children}
      </div>
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}
