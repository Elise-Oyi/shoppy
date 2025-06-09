import "../styles/globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: 'Shoppy',
  description: 'Multi-page e-commerce app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container mx-auto px-4 py-6">{children}</main>
      </body>
    </html>
  );
}


