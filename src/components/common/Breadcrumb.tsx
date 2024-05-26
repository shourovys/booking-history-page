import { BreadcrumbSeparatorIcon } from '@/utils/icon';
import Link from 'next/link';
import React from 'react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className='flex gap-1.5 self-start py-5 text-sm leading-4 text-gray-500'>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.href ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <span className='text-blue-500 font-[475]'>{item.label}</span>
          )}
          {index < items.length - 1 && (
            <BreadcrumbSeparatorIcon className='shrink-0 text-lg text-gray-400' />
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
