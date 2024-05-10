// import { useRef } from "react";
// import { useInView } from "framer-motion";
// import { useTheme } from "next-themes";
// import Calculus2SVG from "/public/assets/calculus2.svg"; // Impor SVG dari file

// export function Calculus2Animation() {
// 	const ref = useRef(null);
// 	const isInView = useInView(ref, { once: true });
// 	const { theme, systemTheme } = useTheme();
// 	const colorMode = theme === "system" ? systemTheme : theme;
// 	const darkThemeColor = colorMode === "dark";

// 	// Mengatur gaya untuk animasi
// 	const animationStyle = {
// 		transform: isInView ? "none" : "translateX(100px)",
// 		opacity: isInView ? 1 : 0,
// 		transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
// 	};

// 	// Menentukan warna berdasarkan tema
// 	const svgStyle = {
// 		fill: darkThemeColor ? "#fff" : "#000",
// 		stroke: darkThemeColor ? "#fff" : "#000",
// 		// Menentukan ukuran SVG
// 		width: "200px",
// 		height: "200px"
// 	};

// 	return (
// 		<div ref={ref} style={animationStyle}>
// 			<div style={svgStyle}>
// 				<Calculus2SVG /> {/* Gunakan SVG yang diimpor */}
// 			</div>
// 		</div>
// 	);
// }
