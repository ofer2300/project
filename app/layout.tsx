"use client"

import './globals.css';
import { Inter } from 'next/font/google';
import { AuthProvider } from '@/lib/auth-context'
import { TranslationProvider } from '@/lib/translation-context'
import { Toaster } from 'sonner'
import LanguageSwitcher from '../components/LanguageSwitcher'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <TranslationProvider>
            {/* Logo and Language Switcher */}
            <div className="fixed top-4 right-4 z-50 flex items-center gap-4">
              <Image
                src="/LOGO/U_I.jpg"
                alt="Logo"
                width={200}
                height={200}
                className="rounded-lg shadow-md"
              />
              <LanguageSwitcher />
            </div>
            {children}
            <Toaster />
          </TranslationProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
