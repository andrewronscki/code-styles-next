import { ReactNode } from "react";

type Props = {
	icon?: ReactNode;
	text?: string;
	color?: string;
	backgroundColor?: string;
	width?: string;
	height?: string;
}

export function Button({ 
	icon ,
	text, 
	color = 'text-white', 
	backgroundColor = 'bg-green-500', 
	width = 'w-full', 
	height = 'h-auto' 
}: Props) {
	const content = text ? text : icon;

	return (
		<button
			className={`flex ${color} ${backgroundColor} ${width} ${height} rounded-xl p-2`}
		>
			{content}
		</button>
	)
}