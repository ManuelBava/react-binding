import { useState } from "react";

export default function FilterNamesSection() {
  const names = [
    "Mario Rossi",
    "Luigi Verdi",
    "Giuseppe Bianchi",
    "Anna Neri",
    "Francesca Viola",
    "Marco Gialli",
  ];
  const [nameFiltered, setName] = useState("");

  // derived state
  const filteredList = names.filter((name) =>
    name.toLowerCase().includes(nameFiltered.toLowerCase()),
  );

  return (
    <section>
      <h2>Filter Names Section</h2>
      <div className="my-3 col-12 col-md-6 col-lg-4 mx-auto">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input
          className="form-control"
          type="text"
          name=""
          id="name"
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="my-2">
        <ul className="list-unstyled d-flex flex-column gap-1">
          {filteredList.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
