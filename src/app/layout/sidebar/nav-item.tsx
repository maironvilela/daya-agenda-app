import { type LucideIcon } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import Link from 'next/link';

export function NavItem({
  icon: Icon,
  label,
  active,
  href,
}: {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  href: string;
}) {
  return (
    <Button
      variant="ghost"
      className={`w-full justify-start ${
        active
          ? 'bg-slate-800/70 text-cyan-400'
          : 'text-slate-400 hover:text-slate-100'
      }`}
    >
      <Icon className="mr-2 h-4 w-4" />
      <Link href={href}>{label}</Link>
    </Button>
  );
}
