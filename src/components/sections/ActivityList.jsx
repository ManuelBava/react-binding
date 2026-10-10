import { useState } from "react";

export default function ActivityList() {
  // Genera una lista di attività permettendo di segnare ogni elemento come completato applicando una classe con stile testuale barrato quando clicchiamo sull'elemento in questione.
  const [toDoList, setToDoList] = useState([
    { id: 1, text: "fare la spesa", isDone: true },
    { id: 2, text: "portare fuori il cane", isDone: true },
    { id: 3, text: "pulire casa", isDone: true },
    { id: 4, text: "lavorare al progetto giardino", isDone: true },
  ]);

  function handleToDoList(id) {
    setToDoList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item,
      ),
    );
  }

  return (
    <section className="my-5">
      <h2>TO DO LIST</h2>
      <div className="my-4">
        <ul className="d-flex flex-column gap-3 justify-content-center list-unstyled">
          {toDoList.map((item) => (
            <li
              key={item.id}
              onClick={() => handleToDoList(item.id)}
              className={
                item.isDone ? "text-decoration-line-through text-muted" : ""
              }
              style={{ cursor: "pointer" }}
            >
              {item.isDone && (
                <i className="bi bi-check-circle-fill text-success me-2"></i>
              )}
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
