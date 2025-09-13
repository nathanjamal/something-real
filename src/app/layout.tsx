import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Something Real",
  description: "I want something real. Digital & physical releases by Nathan Jamal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="eJELqhDqDYZYEDU17m-R5jQPIuVeW4eOW_cTCfOxkXQ" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
