import { useState } from "react";

export default function CharactersCounter() {
  const [char, setChar] = useState("");
  return (
    <section className="my-3">
      <h2>Characters Counter</h2>
      <div className="my-3 col-12 col-md-6 col-lg-4 mx-auto">
        <label className="form-label" htmlFor="counter">
          L'Input ha: {char.length} caratteri
        </label>
        <input
          className="form-control"
          type="text"
          name=""
          id="counter"
          onChange={(event) => setChar(event.target.value)}
        />
      </div>
    </section>
  );
}
