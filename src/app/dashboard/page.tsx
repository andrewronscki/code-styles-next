import { Title } from "./atoms/Title";
import { ListPeople } from "./template/ListPeople";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-24 bg-slate-950 gap-20">
			<div className="flex justify-start items-center w-320">
				<Title text="Dashboard" color="text-white" />
			</div>
			<ListPeople />
    </main>
  )
}
