import { PropsWithChildren } from "react";

export default function Sidebar({ children }: PropsWithChildren) {
  return <div className="sidebar">{children}</div>;
}

export function SidebarTop({ children }: PropsWithChildren) {
  return <div className="sidebar__top">{children}</div>;
}
