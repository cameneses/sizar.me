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
      <body>{children}</body>
    </html>
  );
}
