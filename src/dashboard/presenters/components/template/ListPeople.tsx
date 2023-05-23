"use client";

import { useEffect, useState } from "react";

import { AxiosHttpClient } from "@/shared";

import { FindPeople } from "@/dashboard/data";
import { AxiosPersonRepository } from "@/dashboard/infra";

import { PersonCard } from "../organisms/PersonCard";
import { PersonEntity } from "@/dashboard/domain";

export async function ListPeople() {
	const httpClient = new AxiosHttpClient();
	const personRepository = new AxiosPersonRepository(httpClient);

	const [people, setPeople] = useState<PersonEntity[]>([]);

	useEffect(() => {
		const findPeople = async () => {
			const peopleFound = await new FindPeople(personRepository).execute();

			setPeople(peopleFound);
		}

		findPeople();
	}, [])
	
	return (
		<div className="flex flex-wrap w-320 gap-6">
			{people.map(card => (
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