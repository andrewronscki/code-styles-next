import { PersonEntity, PersonRepository } from "@/dashboard/domain";

export class AxiosPersonRepository implements PersonRepository {
	async findAll(): Promise<PersonEntity[]> {
		return [];
	}
}