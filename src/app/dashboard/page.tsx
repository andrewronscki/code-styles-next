import { PersonCard } from "./organisms/PersonCard";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-950">
			<PersonCard />
    </main>
  )
}
