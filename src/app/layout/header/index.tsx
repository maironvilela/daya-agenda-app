import { Bell, Mail } from 'lucide-react';
import Image from 'next/image';
import { Avatar } from '../../../components/Avatar';

export function Header() {
  return (
    <header className="flex items-center justify-between border-b pr-4 border-slate-700/50">
      <div className="flex items-center space-x-2 ">
        <Image
          alt="Logo"
          src="/logo.svg"
          width={180}
          height={80}
          className="rounded-full"
        />
      </div>
      <section className="flex items-center space-x-4">
        <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
          <Bell />
        </button>
        <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
          <Mail />
        </button>
        <div className="relative">
          <button
            id="user-menu-button"
            className="flex items-center space-x-2 focus:outline-none"
          ></button>
        </div>
        <Avatar
          avatarUrl="https://robohash.org/888eb684e8a1c0ab34ce76b82b2996f2?set=set4&bgset=&size=400x400"
          isBorder
        />
      </section>
    </header>
  );
}
