import { useState } from "react";
import Router from "next/router";
import { useRouter } from "next/router";
import { useEffect } from "react";
// const router = useRouter();

import Loader from "@components/Loader";
import Navbar from "@components/Navbar";
import Home from ".";
import "@styles/globals.css";

import "tailwindcss/tailwind.css";
// import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
/* 	registerLocale("tr", tr);
	setDefaultLocale('tr');
 */
	const { pathname } = useRouter();

	useEffect(() => {
		setLoading(false);
	}, [pathname]);

	const [loading, setLoading] = useState(true);

	Router.events.on("routeChangeStart", (url) => {
		//   console.log("Route is changing");
		setLoading(true);
	});

	Router.events.on("routeChangeComplete", (url) => {
		//   console.log("Route is complete");
		setLoading(false);
	});

	let args = { ...pageProps };
	args.loading = loading;
	args.setLoading = setLoading;

	pageProps = args;
	// {setLoading(true)}

	return (
		<>
			{loading && <Loader />}
			<div className={"flex flex-col min-h-screen"}>
				<Navbar />
				<div className="flex flex-grow justify-center bg-orange-500">
					<Component {...pageProps} />
				</div>
			</div>
		</>
	);
}

export default MyApp;
