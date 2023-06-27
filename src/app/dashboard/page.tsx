"use client";

import { ListPeople } from "@/dashboard/presenters";
import { DashboardLayout } from "@/dashboard/presenters";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <ListPeople />
    </DashboardLayout>
  );
}
