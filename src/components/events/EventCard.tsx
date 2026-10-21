import type { CampusEvent } from "../../types/campus-event";
import { formatDate } from "../../utils/format-date";

interface EventCardProps {
  event: CampusEvent;
  onShowDetail: (id: string) => void;
}

function EventCard({ event, onShowDetail }: EventCardProps) {
  return (
    <article className="kart event-card">
      {event.image && (
        <img src={event.image} alt={event.title} className="event-image" />
      )}
      <div className="event-content">
        <span className="event-category">{event.category}</span>
        <h3>{event.title}</h3>
        <p className="event-desc">{event.description}</p>
        <div className="event-meta">
          <span>📅 {formatDate(event.date)} {event.time}</span>
          <span>📍 {event.location}</span>
          <span>👥 Kontenjan: {event.capacity}</span>
        </div>
        <button
          type="button"
          className="btn-detail"
          onClick={() => onShowDetail(event.id)}
        >
          Detayları Gör
        </button>
      </div>
    </article>
  );
}

export default EventCard;