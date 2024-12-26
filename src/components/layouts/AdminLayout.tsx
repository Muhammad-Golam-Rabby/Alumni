import React from "react";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { AdminSidebar } from "../sidebars/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <main className="w-full">
        <SidebarTrigger />
        <div className="p-4">{children}</div>
      </main>
    </SidebarProvider>
  );
}
