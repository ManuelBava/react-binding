import { useState } from "react";

export default function UpdatingTag() {
  const [innerTexTagUpdated, setInnerTexTagUpdated] = useState("Updating TAG");

  return (
    <section>
      <h1>{innerTexTagUpdated}</h1>
      <div className="my-3 col-12 col-md-6 col-lg-4 mx-auto">
        <label className="form-label" htmlFor="tagUpdate">
          Tag Update
        </label>
        <input
          className="form-control"
          type="text"
          name=""
          id="tagUpdate"
          onChange={(event) => setInnerTexTagUpdated(event.target.value)}
        />
      </div>
    </section>
  );
}
