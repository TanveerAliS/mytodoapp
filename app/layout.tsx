import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Primary from './components/layouts/primary/Primary';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Todo Application',
  description: 'An application to manage all your todos',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-slate-100 ${inter.className}`}>
        <Primary>{children}</Primary>
      </body>
    </html>
  );
}
