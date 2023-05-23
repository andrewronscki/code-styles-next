import { PersonEntity, PersonRepository } from "@/dashboard/domain";

export class FakePersonRepository implements PersonRepository {
	async findAll(): Promise<PersonEntity[]> {
		return [
			{ id: 1, name: "Andre", role: "Tech Lead", points: 5000 },
			{ id: 2, name: "Eduardo", role: "Development", points: 7000 },
			{ id: 3, name: "Maria", role: "Development", points: 3000 },
			{ id: 4, name: "Jose", role: "Development", points: 6000 },
			{ id: 5, name: "Irineu", role: "Development", points: 11000 },
			{ id: 6, name: "Ana", role: "Development", points: 9000 },
			{ id: 7, name: "Fulano", role: "Development", points: 10000 },
			{ id: 8, name: "Ciclano", role: "Development", points: 5000 },
			{ id: 9, name: "Beltrano", role: "Development", points: 6000 },
			{ id: 10, name: "Joao", role: "Development", points: 4000 },
		];
	}
}