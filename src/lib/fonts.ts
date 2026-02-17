// lib/fonts.ts (create this file)
import { Poppins } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',   // ← this creates a CSS var
  display: 'swap',
});