"use client";
import { useTheme } from "next-themes";
import { Bounce, ToastContainer } from "react-toastify";
const ToastProvider = () => {
	const { theme } = useTheme();
	return (
		<ToastContainer
			position="bottom-right"
			autoClose={1800}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick={false}
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme={theme === "light" ? "light" : "dark"}
			transition={Bounce}
		/>
	);
};

export default ToastProvider;
