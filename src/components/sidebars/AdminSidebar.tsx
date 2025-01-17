"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  CalendarDaysIcon,
  ClipboardMinusIcon,
  GraduationCapIcon,
  LayoutDashboardIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

export function AdminSidebar() {
  const items = [
    {
      title: "Dashboard",
      url: "/admin",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Students",
      url: "/admin/students",
      icon: GraduationCapIcon,
    },
    {
      title: "Events",
      url: "/admin/events",
      icon: CalendarDaysIcon,
    },
    {
      title: "Notices",
      url: "/admin/notices",
      icon: ClipboardMinusIcon,
    },
  ];

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <div className="p-2">
        <Button
          onClick={() => signOut()}
          variant={"destructive"}
          className="w-full"
        >
          Logout
        </Button>
      </div>
      <SidebarFooter />
    </Sidebar>
  );
}
