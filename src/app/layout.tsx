import { Breadcrumbs } from "@/components/breadcrumbs";
import { Pager } from "@/components/pager";
import { SidebarNav } from "@/components/sidebar-nav";
import { SiteHeader } from "@/components/site-header";
import { TableOfContents } from "@/components/table-of-contents";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const quivira = localFont({
  src: "./quivira.ttf",
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "The Beginner's Gambit",
  description: "Chess docs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "flex min-h-screen flex-col font-sans antialiased",
          inter.variable,
          quivira.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <SiteHeader />
          <div className="container flex flex-1 justify-center gap-8 xl:gap-16">
            <SidebarNav />
            <main className="content prose prose-sm prose-slate py-8 dark:prose-invert prose-headings:scroll-mt-24 prose-h1:mb-0 prose-hr:my-4 prose-lead:my-0">
              <Breadcrumbs />
              {children}
              <Pager />
            </main>
            <TableOfContents />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
