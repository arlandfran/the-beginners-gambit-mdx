import { Breadcrumbs } from "@/components/breadcrumbs";
import { Pager } from "@/components/pager";
import { SidebarNav } from "@/components/sidebar-nav";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
          "flex min-h-screen flex-col antialiased",
          inter.className,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <SiteHeader />
          <div className="container flex flex-1 gap-8">
            <SidebarNav />
            <main className="prose prose-sm prose-slate mx-auto w-full py-8 dark:prose-invert prose-h1:mb-0 prose-hr:my-4 prose-lead:my-0">
              <Breadcrumbs />
              {children}
              <Pager />
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
