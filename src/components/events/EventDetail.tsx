import type { CampusEvent } from "../../types/campus-event";

interface EventDetailProps {
  event: CampusEvent;
  onBack: () => void;
  onEdit: (id: string) => void;
}

function EventDetail({ event, onBack, onEdit }: EventDetailProps) {
  return (
    <article className="detay">
      <h2>{event.title}</h2>

      <div className="detay-icerik">
        {event.image && (
          <figure className="detay-afis">
            <img src={event.image} alt={event.title} />
          </figure>
        )}

        <div className="kunye">
          <p><strong>Kategori:</strong> {event.category}</p>
          <p><strong>Tarih:</strong> {event.date}</p>
          <p><strong>Saat:</strong> {event.time}</p>
          <p><strong>Yer:</strong> {event.location}</p>
          <p><strong>Kontenjan:</strong> {event.capacity}</p>
        </div>
      </div>

      <div className="detay-aciklama">
        <p>{event.description}</p>
      </div>

      <div
        className="detay-aksiyonlar"
        style={{ marginTop: "1.5rem", display: "flex", gap: "1rem" }}
      >
        <button
          type="button"
          onClick={() => onEdit(event.id)}
        >
          Bu etkinliği güncelle
        </button>

        <button
          type="button"
          onClick={onBack}
        >
          Listeye dön
        </button>
      </div>
    </article>
  );
}

export default EventDetail;