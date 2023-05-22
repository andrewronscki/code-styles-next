import { PersonCard } from "../organisms/PersonCard";

export function ListPeople( ) {
	const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<div className="flex flex-wrap w-320 gap-6">
			{list.map(card => (<PersonCard key={card} />))}
		</div>
	)
}