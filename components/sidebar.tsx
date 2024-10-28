import { User, BookOpen, FileText, Clock, Cpu, Upload, BarChart2, FileText as ReportIcon, ChevronDown } from "lucide-react"; // Import new icons
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

// Menu items for the Standard group.
const standardItems = [
  {
    title: "My Profile",
    url: "/Dashboard/Profile",
    icon: User,
  },
  {
    title: "Resume",
    url: "/Dashboard/Resume",
    icon: FileText,
  },
  {
    title: "AI Prep",
    url: "/Dashboard/AIprep",
    icon: Cpu,
  },
  {
    title: "History",
    url: "/Dashboard/history",
    icon: Clock,
  },
  {
    title: "Journal",
    url: "/Dashboard/Dailyjournal",
    icon: BookOpen,
  },
];

// Menu items for the Extended Features group.
const extendedFeaturesItems = [
  {
    title: "Upload Certificate",
    url: "#",
    icon: Upload, // Icon for Upload Certificate
  },
  {
    title: "Career Analytics",
    url: "#",
    icon: BarChart2, // Icon for Career Analytics
  },
  {
    title: "Internship Report Maker",
    url: "#",
    icon: ReportIcon, // Icon for Internship Report Maker
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="pt-20 shadow-xl">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Standard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {standardItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.title === "Journal" ? (
                    // Journal item with dropdown
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <SidebarMenuButton>
                          <item.icon />
                          <span>{item.title}</span>
                          <ChevronDown className="ml-auto" />
                        </SidebarMenuButton>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                        <DropdownMenuItem className=" ml-12">
                          <SidebarMenuButton asChild>
                            <a href="/Dashboard/Dailyjournal">
                              <span>Daily Journal</span>
                            </a>
                          </SidebarMenuButton>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="ml-12">
                          <SidebarMenuButton asChild>
                            <a href="/Dashboard/Journalactivity">
                              <span>Activity</span>
                            </a>
                          </SidebarMenuButton>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Extended Features Group */}
        <SidebarGroup>
          <SidebarGroupLabel className="mt-10">Extended Features</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {extendedFeaturesItems.map((item) => (
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

        {/* Upgrade to Extended Plan Box */}
        <div className="mt-auto mb-6 mx-3 bg-gray-100 border border-slate-600 p-3 rounded-lg text-center shadow-lg">
          <h4 className="font-semibold">Upgrade to Extended Plan</h4>
          <p className="text-sm">Get access to premium features</p>
          <button className="mt-2 bg-black text-white text-sm rounded w-full py-2">Upgrade Now</button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
