import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Changelog Sentiment Analyzer",
  description: "Analyze customer sentiment from changelog comments. Track user reactions across releases to identify popular and unpopular features."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a11861bb-2880-408b-b731-7f294f404174"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
