'use client';

import { Avatar } from "@/shared/presenters";
import { Button } from "@/shared/presenters";

import { RiArrowRightSLine } from 'react-icons/ri'
import { CardDetail } from "@/shared/presenters";;

export function PersonCard( ) {
	return (
		<div className="flex flex-col bg-white w-56 h-64 rounded-xl p-4">
			<div className="flex justify-center items-center">
				<Avatar alt="Imagem de perfil do usuario" height={86} width={86} border={true} rounded="rounded-full" />
			</div>

			<div className="flex justify-between w-full mt-2">
				<div className="flex flex-col justify-start items-start w-full gap-2">
					<CardDetail label="Name" text="John Due" />
					<CardDetail label="Role" text="Development" />
					<CardDetail label="Points" text="5.000" />
				</div>
				<div className="flex justify-end items-end">
					<Button width="" height="" icon={RiArrowRightSLine} />
				</div>
			</div>
		</div>
	)
}