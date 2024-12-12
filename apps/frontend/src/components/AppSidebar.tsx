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

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Logo from "./ui/logo";

import { BsBox } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { TbReport } from "react-icons/tb";

// Menu items.
const items = [
  {
    title: "Gerenciar",
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

const profiles = [
  {
    name: "Administrador",
  },
  {
    name: "Moderador",
  },
  {
    name: "Usuário",
  },
];

export function AppSidebar() {
  return (
    <Sidebar variant="inset">
      <SidebarHeader className="flex justify-center items-center">
        <Logo size="small" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="flex flex-col items-center">
            <Select>
              <SelectTrigger className="w-[180px] bg-[#27272A]">
                <SelectValue placeholder="Perfil de acesso" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {profiles.map((profile) => (
                    <SelectItem key={profile.name} value={profile.name}>
                      <span>{profile.name}</span>
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <SidebarMenu className="mt-10">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="flex justify-center">
                    <a href={item.url}>
                      <item.icon className="mr-4" />
                      <span className="hover:font-semibold">{item.title}</span>
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
