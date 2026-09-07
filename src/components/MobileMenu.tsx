import { useState } from 'react';

interface MobileMenuProps {
  items: Array<{ label: string; href: string }>;
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  items,
  isOpen,
  onClose,
}) => {
  return (
    <div
      className={`fixed inset-0 bg-black/80 z-40 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <nav
        className={`fixed right-0 top-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-2xl font-bold"
          >
            ×
          </button>
          <ul className="mt-8 space-y-4">
            {items.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                  onClick={onClose}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};