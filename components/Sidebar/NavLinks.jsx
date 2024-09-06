import Link from "next/link";

const links = [
  { href: "/dashboard/tours/new-tour", label: "new tour" },
  { href: "/dashboard/tours", label: "tours" },
  { href: "/dashboard/preview", label: "preview" },
  { href: "/dashboard/chat", label: "chat" },
  { href: "/dashboard/profile", label: "profile" },
];

function NavLinks() {
  return (
    <div className='menu text-base-content'>
      {links.map((link) => {
        return (
          <li key={link.href}>
            <Link href={link.href} className='capitalize'>
              {link.label}
            </Link>
          </li>
        );
      })}
    </div>
  );
}

export default NavLinks;
