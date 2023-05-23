import { PersonEntity } from "../entities";

export interface PersonRepository {
	findAll: () => Promise<PersonEntity[]>
}