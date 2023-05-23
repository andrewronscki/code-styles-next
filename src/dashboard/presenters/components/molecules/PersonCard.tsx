'use client';

import { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Avatar, Button, Information, Text } from "@/shared/presenters";
import { PersonEntity } from '@/dashboard/domain';


// This iwould be a molecule
export function PersonCard(person: PersonEntity) {
	const [isLoading, setIsLoading] = useState(false);

	function handleButton() {
		setIsLoading(!isLoading);
	}

	return (
		<div className="flex flex-col bg-white w-56 h-64 rounded-xl p-4">
			<div className="flex justify-center items-center">
				<Avatar alt="Imagem de perfil do usuario" height={86} width={86} border={true} rounded="rounded-full" />
			</div>

			<div className="flex justify-between w-full mt-2">
				<div className="flex flex-col justify-start items-start w-full gap-2">
					<Information label="Name" text={person.name} />
					<Information label="Role" text={person.role} />
					<Information label="Points" text={`${person.points}`} />
				</div>
				<div className="flex justify-end items-end">
					<Button 
						icon={{ type: FiChevronRight, size: 32 }} 
						onClick={handleButton} 
						isLoading={isLoading}
						width='w-12'
						height='h-12'
					/>	
				</div>
			</div>
		</div>
	)
}