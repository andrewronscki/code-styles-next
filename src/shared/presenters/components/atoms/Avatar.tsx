'use client';

import Image from "next/image";

type Props = {
	alt: string;
	url?: string;
	width?: number;
	height?: number;
	rounded?: string;
	border?: boolean;
}

export function Avatar({ url, width = 48, height = 48, alt, rounded = 'rounded-none', border = false }: Props) {
	const avatarUrl = url ? url : `https://robohash.org/avatar.png?size=${width}x${height}`;

	const borderConfig = border ? `border-solid border-2 border-white` : '';
	
	return (
		<Image 
			src={avatarUrl} 
			alt={alt} 
			width={width} 
			height={height} 
			className={ `${rounded} ${borderConfig}`}
		/>
	)
}