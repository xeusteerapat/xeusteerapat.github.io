import React from 'react';
import { cn } from '../lib/utils';

interface NavigationProps {
  basePath: string;
}

const Navigation: React.FC<NavigationProps> = ({ basePath }) => {
  const [activeItem, setActiveItem] = React.useState<string>('');

  React.useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === basePath || currentPath === '/') {
      setActiveItem('home');
    } else if (currentPath.startsWith(basePath + 'blog')) {
      setActiveItem('blog');
    } else if (currentPath.startsWith(basePath + 'about')) {
      setActiveItem('about');
    } else if (currentPath.startsWith(basePath + 'contact')) {
      setActiveItem('contact');
    }
  }, [basePath]);

  return (
    <nav className="flex gap-6">
      <a
        href={basePath}
        className={cn(
          'transition-colors hover:text-primary',
          activeItem === 'home' ? 'text-primary font-medium' : 'text-foreground'
        )}
      >
        Home
      </a>
      <a
        href={basePath + 'blog'}
        className={cn(
          'transition-colors hover:text-primary',
          activeItem === 'blog' ? 'text-primary font-medium' : 'text-foreground'
        )}
      >
        Blog
      </a>
      <a
        href={basePath + 'about'}
        className={cn(
          'transition-colors hover:text-primary',
          activeItem === 'about' ? 'text-primary font-medium' : 'text-foreground'
        )}
      >
        About
      </a>
      <a
        href={basePath + 'contact'}
        className={cn(
          'transition-colors hover:text-primary',
          activeItem === 'contact' ? 'text-primary font-medium' : 'text-foreground'
        )}
      >
        Contact
      </a>
    </nav>
  );
};

export default Navigation;
