import { FindPeople } from "@/dashboard/data";

import { PersonCard } from "../molecules/PersonCard";
import { personRepositoryFactory } from "../../factories";

	// This would be an organism because it has some molecules
export async function ListPeople() {
	const peopleFound = await new FindPeople(personRepositoryFactory()).execute();

	return (
		<div className="flex flex-wrap w-320 gap-6">
			{peopleFound.map(card => (
				<PersonCard 
					key={card.id} 
					id={card.id}
					name={card.name}
					role={card.role}
					points={card.points}
				/>
			))}
		</div>
	)
}