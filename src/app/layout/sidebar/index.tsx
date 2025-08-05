import { NavItem } from './nav-item';

import {
  Activity,
  Command,
  Database,
  Globe,
  Hospital,
  LogOut,
  MessageSquare,
  Settings,
  Shield,
  Terminal,
} from 'lucide-react';

export const Sidebar = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <nav>
        <NavItem icon={Command} label="Dashboard" href="/" />
        <NavItem
          icon={Hospital}
          label="Hospital"
          href="/cadastro/hospital"
          active
        />
      </nav>
      <div className="pt-16 border-t border-slate-700/50">
        <div className="text-xs text-slate-500 mb-2 font-mono">
          <nav>
            <NavItem icon={LogOut} label="Sair" href="/" />
          </nav>
        </div>
        <div className="space-y-3"></div>
      </div>
    </div>
  );
};
