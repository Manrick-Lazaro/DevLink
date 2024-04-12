import { ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
	onClick?: () => void;
}

export default function Button(props: ButtonProps): JSX.Element {
	const { children, onClick } = props;
	return (
		<button
			type="submit"
			className="h-9 bg-blue-600 rounded borde-0 text-lg font-medium text-white transition-transform hover:scale-105 w-full justify-center flex items-center"
			onClick={onClick}
		>
			{children}
		</button>
	);
}
