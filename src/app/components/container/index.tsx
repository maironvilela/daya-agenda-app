import { cn } from '@/lib/utils';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div
      className={cn(
        'bg-slate-900/50 border-slate-700/50 border-2 rounded-lg  flex flex-row  items-center gap-2 p-2',
        className
      )}
    >
      {children}
    </div>
  );
}
