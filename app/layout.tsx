import './globals.css'; // Import global styles
import { Providers } from './providers'; // Import Providers from app/providers.tsx

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers> {/* Wrap the entire app with Providers */}
      </body>
    </html>
  );
}