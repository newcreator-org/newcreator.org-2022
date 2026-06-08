// ============================================================
// Breadcrumb — newCreator.org Design System v2
// CSS Modules / SCSS 廃止 → Tailwind + CSS Custom Properties
// ============================================================
import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="パンくずリスト" className="py-3">
      <ol
        className="flex items-center flex-wrap mx-auto px-6"
        style={{ maxWidth: '1200px', gap: '8px' }}
      >
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center"
            style={{ gap: '8px', fontSize: '14px' }}
          >
            {item.href ? (
              <>
                <Link
                  href={item.href}
                  className="link-brand hover:opacity-70 transition-opacity duration-200"
                >
                  {item.label}
                </Link>
                {index < items.length - 1 && (
                  <span style={{ color: '#A0AEC0', margin: '0 4px' }}>/</span>
                )}
              </>
            ) : (
              <span style={{ color: '#718096' }}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
