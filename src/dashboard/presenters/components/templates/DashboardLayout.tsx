import { Title } from "@/shared";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

// Maybe you don't need the template
export function DashboardLayout({ children }: Props) {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-24 bg-slate-950 gap-20">
      <div className="flex justify-start items-center w-320">
        <Title text="Dashboard" color="text-white" />
      </div>
      {children}
    </main>
  );
}
