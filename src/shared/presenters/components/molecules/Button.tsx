'use client';

import { MouseEvent } from "react";
import { IconType } from "react-icons";
import { Icon, Spinner } from "@/shared/presenters";

type ButtonProps = {
	onClick: (event: MouseEvent<HTMLButtonElement>) => void;
	isLoading: boolean;
	icon?: {
		type: IconType,
		size: number,
	};
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
	height = 'h-auto',
	onClick,
	isLoading
}: ButtonProps) {
	const backgroundColorArray = backgroundColor.split('-');
	const backgroundColorHover = `${backgroundColorArray[0]}-${backgroundColorArray[1]}-${Number(backgroundColorArray[2]) + 100}`;
	
	return (
		<button
			className={`flex ${color} ${backgroundColor} ${width} ${height} rounded-xl p-2 justify-center items-center hover:${backgroundColorHover} disabled:${backgroundColorHover}`}
			onClick={onClick}
			disabled={isLoading}
		>
			{isLoading && <Spinner />}
			{!isLoading && icon && <Icon icon={icon.type} size={icon.size} color="#fff" />}
			{!isLoading && text && text}
		</button>
	)
}