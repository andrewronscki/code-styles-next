'use client';

import { IconType } from "react-icons";
import { Icon } from "@/shared/presenters";

type ButtonProps = {
	icon?: IconType;
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
}: ButtonProps) {


	return (
		<button
			className={`flex ${color} ${backgroundColor} ${width} ${height} rounded-xl p-2`}
		>
			{icon && <Icon icon={icon} color="#fff" />}
			{text && text}
		</button>
	)
}