import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/layout/ThemeProvider';

export const metadata: Metadata = {
  title: 'Udara Rathnayake — Portfolio',
  description: 'Software Engineering Undergraduate | Full-Stack Developer | Cybersecurity Enthusiast',
  keywords: ['Software Engineer','Full-Stack Developer','Cybersecurity','Laravel','React','Sri Lanka','Udara Rathnayake'],
  authors: [{ name: 'Udara Rathnayake' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
