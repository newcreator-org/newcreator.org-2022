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
      className="card-base h-full flex flex-col"
      style={{ transition: 'background-color 0.15s' }}
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
          />
        </div>
      )}
      <div className="flex-1 flex flex-col p-6">
        <div className="flex items-center flex-wrap mb-3" style={{ gap: '8px' }}>
          {badge && (
            <span
              className="inline-block label-text px-2 py-0.5 rounded-sm"
              style={{ background: badgeStyle.bg, color: badgeStyle.color }}
            >
              {badge}
            </span>
          )}
          {category && (
            <span className="label-text" style={{ color: '#718096' }}>
              {category}
            </span>
          )}
          {date && (
            <span className="label-text" style={{ color: '#718096' }}>{date}</span>
          )}
        </div>
        <h3 className="card-title mb-3">
          {title}
        </h3>
        {description && (
          <p
            className="body-text flex-1"
            style={{ color: '#718096', margin: 0 }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block w-full" style={{ textDecoration: 'none', color: 'inherit' }}>
        {cardContent}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button type="button"
        onClick={onClick}
        className="block w-full text-left"
        style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
      >
        {cardContent}
      </button>
    );
  }

  return cardContent;
};

export default Card;
