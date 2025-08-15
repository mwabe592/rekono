import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import getUser from "@/utils/getUser";

interface TopNavProps {
  title?: string;
}

const user = await getUser();

console.log("user info is:", user);

export function TopNav({ title = "Home" }: TopNavProps) {
  // Extract user details from the database user object
  const userName =
    user?.user_metadata?.full_name || user?.user_metadata?.name || "User";
  const userEmail = user?.email || "user@example.com";
  const userAvatar =
    user?.user_metadata?.avatar_url || user?.user_metadata?.picture;

  return (
    <header className="bg-background flex h-16 items-center justify-between border-b px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="md:hidden" />
        <h1 className="text-xl font-semibold">{title}</h1>
      </div>

      <div>
        {/* User dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex h-auto items-center gap-2 p-2"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={userAvatar || "/placeholder.svg"}
                  alt={userName}
                />
                <AvatarFallback className="bg-muted">
                  {userName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <span className="hidden sm:inline-block">{userName}</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium">{userName}</p>
                <p className="text-muted-foreground text-xs">{userEmail}</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              asChild
              className="text-red-600 hover:cursor-pointer hover:bg-red-50"
            >
              <form action={signOut} className="w-full">
                <button
                  type="submit"
                  className="flex w-full items-center gap-2 text-left text-sm"
                >
                  Log out
                </button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
