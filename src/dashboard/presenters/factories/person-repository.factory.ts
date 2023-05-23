import { PersonRepository } from "@/dashboard/domain";
import { AxiosPersonRepository, FakePersonRepository } from "@/dashboard/infra";

export function personRepositoryFactory(): PersonRepository {
	if (process.env.NODE_ENV === "development") return new FakePersonRepository();
	else if (process.env.NODE_ENV === "production") return new AxiosPersonRepository();
	else return new FakePersonRepository();
}