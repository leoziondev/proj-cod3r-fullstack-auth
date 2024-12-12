import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import Logo from "./ui/logo";

import { BsBox } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { TbReport } from "react-icons/tb";

// Menu items.
const items = [
  {
    title: "gerenciar",
    url: "#",
    icon: FiUser,
  },
  {
    title: "Visualizar",
    url: "#",
    icon: BsBox,
  },
  {
    title: "Relatório",
    url: "#",
    icon: TbReport,
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
