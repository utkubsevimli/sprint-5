import { useState, useEffect } from "react";
import "./App.css";
import { events } from "./data/events";
import type { Category } from "./types/campus-event";
import { searchEvents, filterByCategory, findEventById } from "./utils/filter-events";
import type { PageName } from "./types/page";
import Header from "./components/layout/Header";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import EventList from "./components/events/EventList";
import EventFilter from "./components/events/EventFilter";
import EventDetail from "./components/events/EventDetail";
import EventForm from "./components/forms/EventForm";

function App() {
  const [page, setPage] = useState<PageName>("home");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [searchText, setSearchText] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<Category | "">("");

  function go(next: PageName, id: string | null = null) {
    setPage(next);
    setSelectedId(id); }
  const selected = selectedId ? findEventById(events, selectedId) : undefined;

  let tabTitle = "Ana Sayfa";
  if (page === "events") tabTitle = "Etkinlikler";
  else if (page === "add") tabTitle = "Etkinlik Ekle";
  else if (page === "detail") tabTitle = selected ? selected.title : "Detay";
  else if (page === "update") tabTitle = "Etkinlik Güncelle";

  useEffect(() => {document.title = `Kampüs Etkinlikleri — ${tabTitle}`; }, [tabTitle]);
  const upcoming = [...events].sort((a, b) => a.date.localeCompare(b.date)).slice(0, 2);
  const categories = [...new Set(events.map((e) => e.category))];
  const filtered = filterByCategory(searchEvents(events, searchText), selectedCategory);

  return (
    <>
      <Header title="Kampüs Etkinlikleri" />
      <Navigation current={page} onNavigate={go} />

      <main className="container">
        {page === "home" && (
          <section>
            <h2>Yaklaşan Etkinlikler</h2>
            <EventList events={upcoming} onShowDetail={(id) => go("detail", id)} />
          </section> )}

        {page === "events" && (
          <section>
            <h2>Tüm Etkinlikler</h2>
            <EventFilter
              searchText={searchText}
              onSearchChange={setSearchText}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              categories={categories} />
            <EventList
              events={filtered}
              onShowDetail={(id) => go("detail", id)}
              emptyText="Aradığınız kriterlere uygun etkinlik bulunamadı" />
          </section> )}

        {page === "detail" && (
          <section>
            {!selected ? (
              <div className="error-box">
                <p>Etkinlik bulunamadı veya silinmiş olabilir.</p>
                <button type="button" onClick={() => go("events")}>Listeye dön</button>
              </div>
            ) : (
              <EventDetail
                event={selected}
                onBack={() => go("events")}
                onEdit={(id) => go("update", id)} /> )}
          </section> )}

        {(page === "add" || page === "update") && (
          <section>
            <h2>{page === "add" ? "Etkinlik Ekle" : "Etkinlik Güncelle"}</h2>
            <EventForm
              isUpdate={page === "update"}
              onSubmit={() => window.scrollTo(0, 0)}
              onCancel={() => go(page === "update" && selectedId ? "detail" : "events", selectedId)} />
          </section>
        )}
      </main>
      <Footer />
    </> ); }
export default App;