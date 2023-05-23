"use client";

import { FindPeople } from "@/dashboard/data";

import { PersonCard } from "../molecules/PersonCard";
import { AxiosHttpClient } from "@/shared";
import { AxiosPersonRepository } from "@/dashboard/infra";
import { useEffect, useState } from "react";
import { PersonEntity } from "@/dashboard/domain";

export function ListPeople() {
	const [people, setPeople] = useState<PersonEntity[]>([]);

	const httpClient = new AxiosHttpClient();
	const personRepository = new AxiosPersonRepository(httpClient);
	
	useEffect(() => {
		const findPeople = async () => {
			const peopleFound = await new FindPeople(personRepository).execute();
			setPeople(peopleFound);
		}

		findPeople();
	}, [])

  return (
    <div className="flex flex-wrap w-320 gap-6">
      {people.map((card) => (
        <PersonCard
          key={card.id}
          id={card.id}
          name={card.name}
          role={card.role}
          points={card.points}
        />
      ))}
    </div>
  );
}
