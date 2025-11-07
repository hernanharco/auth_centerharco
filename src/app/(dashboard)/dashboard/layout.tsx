import {
    SidebarProvider,
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarFooter,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarInset,
    SidebarTrigger,
  } from '@/components/ui/sidebar';
import { Logo } from '@/components/logo';
import { UserNav } from '@/components/dashboard/user-nav';
import { Home, User, Settings, LogOut } from 'lucide-react';
import { logout } from '@/lib/actions';
  
  export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <SidebarProvider>
        <div className="min-h-screen">
          <Sidebar collapsible="icon" className="bg-sidebar-background">
            <SidebarHeader>
              <div className="group-data-[collapsible=icon]:hidden">
                <Logo />
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton href="/dashboard" tooltip="Panel" isActive>
                    <Home />
                    <span>Panel</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton href="/dashboard/profile" tooltip="Perfil">
                    <User />
                    <span>Perfil</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton href="#" tooltip="Ajustes">
                    <Settings />
                    <span>Ajustes</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
            <SidebarFooter>
                <form action={logout}>
                    <SidebarMenuButton type="submit" tooltip="Cerrar Sesión">
                        <LogOut />
                        <span>Cerrar Sesión</span>
                    </SidebarMenuButton>
                </form>
            </SidebarFooter>
          </Sidebar>
          <SidebarInset>
            <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-sm sm:justify-end sm:px-6">
                <SidebarTrigger className="sm:hidden" />
                <UserNav />
            </header>
            <main className="flex-1 p-4 sm:p-6">{children}</main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    );
  }
