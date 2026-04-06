'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/pacientes', label: 'Pacientes' },
  { href: '/medicos', label: 'Médicos' },
  { href: '/citas', label: 'Citas' },
  { href: '/especialidades', label: 'Especialidades' },
  { href: '/horarios', label: 'Horarios' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-60 bg-gray-900 text-white flex flex-col">
      <div className="p-5 text-lg font-bold border-b border-gray-700">
        Turnos Médicos
      </div>

      <nav className="flex-1 p-3 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block p-2 rounded transition ${
                isActive
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}