import ThemeToggleButton from "../ThemeToggleButton";
import DesktopNav from "./DesktopNav";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

const Header = () => {
	return (
		<header
			className={
				"fixed right-0 left-0 z-50 py-1 shadow backdrop-blur-lg dark:border-b-2"
			}
			aria-label="app-header">
			<nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
				<span className="flex items-center gap-4">
					<Logo />
				</span>

				<nav
					className="hidden items-center gap-8 md:flex"
					aria-label="Desktop-Nav-Items">
					<DesktopNav />
					<ThemeToggleButton />
				</nav>

				<nav
					className="flex gap-4 md:hidden"
					aria-label="Mobile-Nav-Items">
					<ThemeToggleButton />

					<MobileNav />
				</nav>
			</nav>
		</header>
	);
};

export default Header;
