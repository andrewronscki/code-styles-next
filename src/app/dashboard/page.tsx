"use client";

import { ListPeople } from "@/dashboard/presenters";
import { DashboardLayout } from "@/dashboard/presenters";

export default function Dashboard() {
  return (
    <DashboardLayout>
      {/* @ts-expect-error Server Component */}
      <ListPeople />
    </DashboardLayout>
  );
}
