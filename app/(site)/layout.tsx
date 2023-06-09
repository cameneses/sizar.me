import Link from 'next/link';
import '../globals.css';

export const metadata = {
  title: "Hello, I'm César",
  description: 'This is my personal website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-10">
        <header>
          <div className="flex flex-row justify-between">
            <div>
              <Link
                href="/"
                className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600
                     bg-clip-text text-transparent text-lg font-bold"
              >
                César
              </Link>
            </div>
            <div>
              <Link href="mailto:camenesese@gmail.com" className="pr-10">
                Contact
              </Link>
              <Link href="https://www.linkedin.com/in/cesar-meneses-113175195/">
                LinkedIn
              </Link>
            </div>
          </div>
        </header>
        <main className="py-10">{children}</main>
      </body>
    </html>
  );
}
