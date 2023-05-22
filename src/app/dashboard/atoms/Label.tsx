type Props = {
	text: string;
	color?: string;
}

export function Label({ text, color = 'text-black' }: Props) {
	return (
		<label className={`not-italic font-bold text-sm ${color}`}>
			{text}
		</label>
	)
}