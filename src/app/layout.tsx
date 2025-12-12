import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { LightRays } from "@/components/magicui/light-rays";
import ThemeProvider from "@/components/Providers/ThemeProvider";
import "./globals.css";

type RootLayoutProps = {
	children: React.ReactNode;
};

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
	return (
		<html
			lang="en"
			suppressHydrationWarning>
			<body>
				<ThemeProvider
					attribute={"class"}
					defaultTheme="dark"
					enableSystem={false}>
					{/* backgroun light effect  */}
					<LightRays className="h-full lg:h-dvh" />

					<Header />

					<main className="mx-auto max-w-7xl px-6 py-3">{children}</main>

					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
