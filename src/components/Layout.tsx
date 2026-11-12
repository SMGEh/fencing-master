import { Link, NavLink, Outlet } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/lessons", label: "Lessons", end: false },
  { to: "/master", label: "The Master", end: false },
  { to: "/locations", label: "Locations", end: false },
  { to: "/history", label: "History", end: false },
  { to: "/books", label: "Books", end: false },
];

export default function Layout() {
  return (
    <div className="site">
      <header className="site-header">
        <Link to="/" className="logo">
          Fencing <span>Master</span>
        </Link>
        <nav className="nav">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="site-footer">
        <span>© Fencing Master. All rights reserved.</span>
        <Link to="/locations">Contact &amp; locations</Link>
      </footer>
    </div>
  );
}
