import { PropsWithChildren } from "react";

export default function Header({ children }: PropsWithChildren) {
  return <header className="header">{children}</header>;
}

export function HeaderTop({ children }: PropsWithChildren) {
  return <div className="header__top">{children}</div>;
}
