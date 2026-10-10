import { useState } from "react";

export default function CheckingStatus() {
  const [state, setState] = useState(false);
  return (
    <div>
      <h2>Checking Status</h2>
      <div className="form-field d-flex gap-3 my-4 justify-content-center align-items-center">
        <input
          type="checkbox"
          id="checkLabel"
          className="check"
          onChange={(e) => setState(e.target.checked)}
        />
        <label htmlFor="checkLabel">Mandatory Checking</label>
        <button className={`btn btn-primary ${state ? "" : "disabled"}`}>
          Prosegui
        </button>
      </div>
    </div>
  );
}
