type Props = {
	text: string;
	color?: string;
}

export function Text({ text, color = 'text-black' }: Props) {
	return (
		<span className={`not-italic font-normal text-xs ${color}`}>
			{text}
		</span>
	)
}