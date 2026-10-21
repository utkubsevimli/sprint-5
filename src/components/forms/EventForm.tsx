interface EventFormProps {
  onSubmit: () => void;
  isUpdate?: boolean;
  onCancel?: () => void;
}

function EventForm({ onSubmit, isUpdate = false, onCancel }: EventFormProps) {
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <div className="form-group" style={{ marginBottom: "1rem" }}>
        <label htmlFor="title">Etkinlik Adı:</label>
        <input
          type="text"
          id="title"
          name="title"
          maxLength={80}
          required
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.3rem" }}
        />
      </div>

      <div className="form-group" style={{ marginBottom: "1rem" }}>
        <label htmlFor="category">Kategori:</label>
        <select
          id="category"
          name="category"
          required
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.3rem" }}
        >
          <option value="">Kategori Seçin</option>
          <option value="Seminer">Seminer</option>
          <option value="Atölye">Atölye</option>
          <option value="Söyleşi">Söyleşi</option>
          <option value="Yarışma">Yarışma</option>
        </select>
      </div>

      <div className="form-group" style={{ marginBottom: "1rem" }}>
        <label htmlFor="date">Tarih:</label>
        <input
          type="date"
          id="date"
          name="date"
          required
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.3rem" }}
        />
      </div>

      <div className="form-group" style={{ marginBottom: "1rem" }}>
        <label htmlFor="time">Saat:</label>
        <input
          type="time"
          id="time"
          name="time"
          required
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.3rem" }}
        />
      </div>

      <div className="form-group" style={{ marginBottom: "1rem" }}>
        <label htmlFor="location">Yer:</label>
        <input
          type="text"
          id="location"
          name="location"
          required
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.3rem" }}
        />
      </div>

      <div className="form-group" style={{ marginBottom: "1rem" }}>
        <label htmlFor="capacity">Kontenjan:</label>
        <input
          type="number"
          id="capacity"
          name="capacity"
          min={1}
          required
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.3rem" }}
        />
      </div>

      <div className="form-group" style={{ marginBottom: "1rem" }}>
        <label htmlFor="description">Açıklama:</label>
        <textarea
          id="description"
          name="description"
          rows={5}
          required
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.3rem" }}
        />
      </div>

      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <button type="submit">
          {isUpdate ? "Güncellemeyi Kaydet" : "Etkinlik Ekle"}
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel}>
            İptal
          </button>
        )}
      </div>
    </form>
  );
}

export default EventForm;