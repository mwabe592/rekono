import { Home, Settings, LogOut } from "lucide-react";

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
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { signOut } from "@/app/(auth)/auth/actions";

// Navigation items
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r-0">
      <SidebarHeader className="border-sidebar-border h-16 border-b">
        <div className="flex h-full items-center px-6">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo/rekon-high-resolution-logo-transparent.png"
              alt="Logo"
              width={32}
              height={32}
              className="h-8 w-8 rounded-lg object-cover"
              priority
            />
            <span className="text-sidebar-foreground text-lg font-semibold">
              Rekono{" "}
            </span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4">
        <SidebarGroup className="mt-4">
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-11 px-3">
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <form action={signOut} className="w-full">
              <SidebarMenuButton asChild className="h-11 px-3">
                <button
                  type="submit"
                  className="flex w-full items-center gap-3 hover:cursor-pointer"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Log out</span>
                </button>
              </SidebarMenuButton>
            </form>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
