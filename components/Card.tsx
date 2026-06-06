// ============================================================
// Card — newCreator.org Design System v2
// CSS Modules / SCSS 廃止 → Tailwind + CSS Custom Properties
// ============================================================

import React from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  description?: string;
  category?: string;
  date?: string;
  href?: string;
  image?: string;
  badge?: string;
  badgeColor?: 'orange' | 'green' | 'blue' | 'gray';
  onClick?: () => void;
}

const BADGE_STYLES: Record<string, { bg: string; color: string }> = {
  orange: { bg: '#EDF6FB', color: '#1476A6' },
  green:  { bg: '#E8F5E9', color: '#2E7D32' },
  blue:   { bg: '#EDF6FB', color: '#1476A6' },
  gray:   { bg: '#F5F5F5', color: '#616161' },
};

export const Card: React.FC<CardProps> = ({
  title,
  description,
  category,
  date,
  href,
  image,
  badge,
  badgeColor = 'blue',
  onClick,
}) => {
  const badgeStyle = BADGE_STYLES[badgeColor] ?? BADGE_STYLES.blue;

  const cardContent = (
    <div
      className="bg-white overflow-hidden h-full flex flex-col"
      style={{
        borderRadius: '12px',
        border: '1px solid rgba(20,118,166,0.10)',
        boxShadow: '0 1px 3px rgba(20,118,166,0.08)',
        transition: 'box-shadow 0.25s ease, transform 0.25s ease',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.boxShadow = '0 6px 20px rgba(20,118,166,0.14)';
        el.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.boxShadow = '0 1px 3px rgba(20,118,166,0.08)';
        el.style.transform = 'translateY(0)';
      }}
    >
      {image && (
        <div
          className="w-full overflow-hidden"
          style={{ height: '200px', background: '#F5F5F5' }}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            style={{ transition: 'transform 0.3s ease' }}
          />
        </div>
      )}
      <div className="flex-1 flex flex-col" style={{ padding: '24px' }}>
        <div className="flex items-center flex-wrap mb-3" style={{ gap: '8px' }}>
          {badge && (
            <span
              className="inline-block text-xs font-bold px-3 py-1 rounded-full"
              style={{ background: badgeStyle.bg, color: badgeStyle.color }}
            >
              {badge}
            </span>
          )}
          {category && (
            <span style={{ fontSize: '14px', color: '#718096', fontWeight: 500 }}>
              {category}
            </span>
          )}
          {date && (
            <span style={{ fontSize: '14px', color: '#A0AEC0' }}>{date}</span>
          )}
        </div>
        <h3
          className="font-bold mb-3"
          style={{ fontSize: '18px', lineHeight: 1.5, color: '#1A202C' }}
        >
          {title}
        </h3>
        {description && (
          <p
            className="flex-1"
            style={{ fontSize: '14px', lineHeight: 1.75, color: '#718096', margin: 0 }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href}>
        <a style={{ display: 'block', textDecoration: 'none', color: 'inherit', width: '100%' }}>
          {cardContent}
        </a>
      </Link>
    );
  }

  if (onClick) {
    return (
      <button
        onClick={onClick}
        style={{
          display: 'block',
          background: 'none',
          border: 'none',
          padding: 0,
          width: '100%',
          textAlign: 'left',
          cursor: 'pointer',
        }}
      >
        {cardContent}
      </button>
    );
  }

  return cardContent;
};

export default Card;
