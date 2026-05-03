import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Etsy Listing SEO Optimizer – Rank Higher, Sell More",
  description: "Analyze your Etsy listings for SEO issues, get keyword suggestions, track ranking changes, and spy on competitors. Built for Etsy sellers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4b63c0b9-b286-4f2f-9d9a-a2d735c5176e"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
