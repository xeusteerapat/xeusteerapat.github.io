import React from 'react';
import { cn } from '../lib/utils';

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  href: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, date, href }) => {
  const buttonStyles = cn(
    'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors',
    'h-10 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground'
  );

  return (
    <div className={cn('rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col')}>
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-xl font-semibold leading-none tracking-tight">{title}</h3>
        <p className="text-sm text-muted-foreground">{date}</p>
      </div>
      <div className="p-6 pt-0 flex-grow">
        <p className="text-sm text-foreground/80">{description}</p>
      </div>
      <div className="flex items-center p-6 pt-0">
        <a href={href} className={buttonStyles}>
          {href === '/blog' ? 'Read my posts' : 'Contact me'}
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
