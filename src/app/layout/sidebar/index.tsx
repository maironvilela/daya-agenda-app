import { Card } from '@radix-ui/themes';
import { CardContent } from '../../../components/ui/card';
import { NavItem } from './nav-item';
import { cn } from '@/lib/utils';

import {
  Activity,
  Command,
  Database,
  Globe,
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
        <NavItem icon={Command} label="Dashboard" active />
        <NavItem icon={Activity} label="Diagnostics" />
        <NavItem icon={Database} label="Data Center" />
        <NavItem icon={Globe} label="Network" />
        <NavItem icon={Shield} label="Security" />
        <NavItem icon={Terminal} label="Console" />
        <NavItem icon={MessageSquare} label="Communications" />
        <NavItem icon={Settings} label="Settings" />
      </nav>
      <div className="pt-16 border-t border-slate-700/50">
        <div className="text-xs text-slate-500 mb-2 font-mono">
          <nav>
            <NavItem icon={LogOut} label="Sair" />
          </nav>
        </div>
        <div className="space-y-3"></div>
      </div>
    </div>
  );
};
