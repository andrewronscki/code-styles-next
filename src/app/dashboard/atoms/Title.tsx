type Props = {
	text: string;
	color?: string;
}

export function Title({ text, color = 'text-black' }: Props) {
	return (
		<label className={`not-italic font-bold text-2xl ${color}`}>
			{text}
		</label>
	)
}