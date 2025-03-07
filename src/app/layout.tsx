import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.scss";
import { silka } from "@/fonts";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "M Sri Chandana - Portfolio",
  description:
    "A portfolio of M Sri Chandana, a Front-end Software Engineer based in Austin, Texas.",
  authors: [{ name: "M Sri Chandana", url: "" }],
  openGraph: {
    title: "M Sri Chandana - Portfolio",
    description:
      "A portfolio of M Sri Chandana, a Front-end Software Engineer based in Austin, Texas.",
    url: "",
    siteName: "M Sri Chandana - Portfolio",
    type: "website",
    images: [
      {
        url: "",
        height: 2072,
        alt: "M Sri Chandana - Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${silka.className}`}
        style={{
          backgroundColor: "#FAACA8", // Solid background color
          backgroundImage: "linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)", // Gradient
        }}
      >
        <ThemeProvider attribute="class">
          <div
            style={{
              flex: "none",
              height: "100%",
              left: "calc(50.00000000000002% - 100% / 2)",
              pointerEvents: "none",
              position: "fixed",
              top: "0",
              width: "100%",
              zIndex: "4",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundSize: "64px",
                backgroundRepeat: "repeat",
                backgroundImage: "url(/Static.png)",
                opacity: "0.06",
                borderRadius: "0px",
              }}
            />
          </div>
          {children}
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
