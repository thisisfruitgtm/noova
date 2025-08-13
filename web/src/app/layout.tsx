import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-headings",
	display: "swap",
});

const openSans = Open_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-body",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Noova",
	description: "Tot marketingul tău, într-un singur loc.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ro-RO">
			<body className={`${montserrat.variable} ${openSans.variable} antialiased bg-background text-foreground`}>
				{children}
			</body>
		</html>
	);
}
