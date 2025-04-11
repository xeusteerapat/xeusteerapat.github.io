// tailwind.d.ts
import 'astro/client';

declare module 'astro/client' {
  export interface HTMLAttributes {
    [key: string]: any;
  }
}