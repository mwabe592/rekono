import { AppSidebar } from "@/components/Dashboard/AppSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { UserProvider } from "../context/UserContext";
import getUser from "@/utils/getUser";
import { TopNav } from "@/components/Dashboard/TopNav";

export const metadata = {
  title: "Dashboard",
  description: "Bank Statement Reconciliation",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser(); // fetches user on the server

  return (
    <UserProvider user={user}>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <TopNav />
          <main>{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </UserProvider>
  );
}
