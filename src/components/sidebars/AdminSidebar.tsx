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
    {
      title: "Testimonials",
      url: "/admin/testimonials",
      icon: CalendarDaysIcon,
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
      <SidebarFooter />
    </Sidebar>
  );
}
