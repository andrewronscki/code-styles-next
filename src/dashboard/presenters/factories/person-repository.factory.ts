import { AxiosHttpClient } from "@/shared";

import { PersonRepository } from "@/dashboard/domain";

import { AxiosPersonRepository, FakePersonRepository } from "@/dashboard/infra";

export function PersonRepositoryFactory(): PersonRepository {
	if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
		return new FakePersonRepository();
	} else {
		const httpClient = new AxiosHttpClient();
		return new AxiosPersonRepository(httpClient);
	}
}