import { InputHTMLAttributes } from "react";

interface iInput extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input(input: iInput): JSX.Element {
	return (
		<input
			className="rounded-md h-9 border-0 outline-none px-2 mb-3"
			{...input}
		/>
	);
}
