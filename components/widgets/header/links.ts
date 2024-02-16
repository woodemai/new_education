interface NavLink {
  href: string;
  label: string;
}

export const links: NavLink[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/courses",
    label: "Courses",
  },
  {
    href: "/reviews",
    label: "Reviews",
  },
  {
    href: "/profile",
    label: "Profile",
  },
  {
    href: "/settings",
    label: "Settings",
  },
];
