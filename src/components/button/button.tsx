import { ReactNode } from "react";

interface iButton {
	children: ReactNode;
}

export default function Button(props: iButton): JSX.Element {
	const { children } = props;
	return (
		<button
			type="submit"
			className="h-9 bg-blue-600 rounded borde-0 text-lg font-medium text-white transition-transform hover:scale-105"
		>
			{children}
		</button>
	);
}
