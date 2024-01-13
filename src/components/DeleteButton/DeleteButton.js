import "./DeleteButton.css";

export default function DeleteButton({ onDeleteEntries, id }) {
  return (
    <div>
      <button onClick={() => onDeleteEntries(id)}>🗑️</button>
    </div>
  );
}
