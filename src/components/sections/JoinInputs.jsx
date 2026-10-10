import { useState } from "react";

export default function JoinInputs() {
  const [name, setName] = useState("Manuel");
  const [surname, setSurname] = useState("Bava");

  // Stato derivato (opzionale, per evitare spazi vuoti se uno dei campi è vuoto)
  const fullName = `${name} ${surname}`.trim();

  return (
    <div>
      <h2>Join Inputs</h2>
      <div className="my-3 col-12 col-md-6 col-lg-4 mx-auto">
        <label className="form-label" htmlFor="nome">
          Nome
        </label>
        <input
          className="form-control"
          type="text"
          name="firstName"
          id="nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label className="form-label" htmlFor="surname">
          Cognome
        </label>
        <input
          className="form-control"
          type="text"
          name="surname"
          id="surname"
          value={surname}
          onChange={(event) => setSurname(event.target.value)}
        />
      </div>
      <p className="fw-bold">{fullName}</p>
    </div>
  );
}
