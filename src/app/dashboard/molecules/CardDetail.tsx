import { Label } from "../atoms/Label";
import { Text } from "../atoms/Text";

type Props = {
	label: string;
	text: string;
}

export function CardDetail({ text, label }: Props) {
	return (
		<div className="flex flex-col justify-start items-start gap-1">
			<Label text={label} />
			<Text text={text} />
		</div>
	)
}