import type { PageName } from "../../types/page";

interface NavigationProps {
  current: PageName;
  onNavigate: (page: PageName) => void;
}

const NAV_ITEMS: { key: PageName; label: string }[] = [
  { key: "home", label: "Ana Sayfa" },
  { key: "events", label: "Etkinlikler" },
  { key: "add", label: "Etkinlik Ekle" },
];

function Navigation({ current, onNavigate }: NavigationProps) {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.key}
            href={`#${item.key}`}
            aria-current={current === item.key ? "page" : undefined}
            onClick={(e) => {
              e.preventDefault();
              onNavigate(item.key);
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;