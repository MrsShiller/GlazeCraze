import "@/app/globals.css";
import type { Metadata } from "next";
import { Providers } from "@/components/providers";

const appDomain = "https://glaze-craze.vercel.app";
const heroImageUrl = `${appDomain}/media/hero.png`;
const splashImageUrl = `${appDomain}/media/splash.png`;

const miniAppEmbed = {
  version: "1",
  imageUrl: heroImageUrl,
  button: {
    title: "Create the glaze, own the craze",
    action: {
      type: "launch_miniapp" as const,
      name: "Glaze Craze",
      url: appDomain,
      splashImageUrl,
      splashBackgroundColor: "#FEE7EC",
    },
  },
};

export const metadata: Metadata = {
  title: "Create the glaze, own the craze",
  description: "Become King Glazer and rule the glaze craze",
  openGraph: {
    title: "Glaze Craze",
    description: "Beat the swarm to the donut hoard and spark an endless glaze rush",
    url: appDomain,
    images: [
      {
        url: heroImageUrl,
      },
    ],
  },
  other: {
    "fc:miniapp": JSON.stringify(miniAppEmbed),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
