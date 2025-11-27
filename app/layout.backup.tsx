import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Degen Minter - Bitcoin Ordinals Inscription",
  description: "Create Bitcoin Ordinals inscriptions with custom images",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-degent-dark text-white font-sans antialiased selection:bg-degent-green selection:text-degent-dark">
        {/* Optional: Add a subtle noise texture overlay */}
        <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-degent-green/10 via-transparent to-degent-orange/10"></div>
        {children}
      </body>
    </html>
  );
}

