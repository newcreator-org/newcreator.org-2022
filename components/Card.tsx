import React from 'react';
import Link from 'next/link';
import styles from './Card.module.scss';

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
  const cardContent = (
    <div className={styles.card}>
      {image && (
        <div className={styles.imageWrapper}>
          <img src={image} alt={title} className={styles.image} />
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.meta}>
          {badge && (
            <span className={`${styles.badge} ${styles[`badge-${badgeColor}`]}`}>
              {badge}
            </span>
          )}
          {category && <span className={styles.category}>{category}</span>}
          {date && <span className={styles.date}>{date}</span>}
        </div>
        <h3 className={styles.title}>{title}</h3>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href}>
        <a className={styles.cardLink}>{cardContent}</a>
      </Link>
    );
  }

  if (onClick) {
    return (
      <button className={styles.cardButton} onClick={onClick}>
        {cardContent}
      </button>
    );
  }

  return cardContent;
};

export default Card;
