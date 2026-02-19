import React from 'react';
import Link from 'next/link';
import styles from './Breadcrumb.module.scss';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className={styles.breadcrumb} aria-label="パンくずリスト">
      <ol className={styles.list}>
        {items.map((item, index) => (
          <li key={index} className={styles.item}>
            {item.href ? (
              <>
                <Link href={item.href}>
                  <a className={styles.link}>{item.label}</a>
                </Link>
                {index < items.length - 1 && (
                  <span className={styles.separator}>/</span>
                )}
              </>
            ) : (
              <span className={styles.current}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
