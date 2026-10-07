import { useState } from "react";

export default function TextAlignChangerSection() {
    // Creare un componente con tre pulsanti ed un paragrafo. Creare una variabile di stato reattiva per gestire l’allineamento del paragrafo. Per ogni pulsante, impostare l’evento onClick e impostare l’allineamento in base al pulsante cliccato

    const [alignment, setAlignment] = useState("start");

    return (
        <section className="container text-center">
            <h2>Text Align Changer Section</h2>
            <div className="my-5 d-flex gap-5 justify-content-center">
                <button onClick={() => setAlignment('start')} className="btn btn-primary">TEXT LEFT</button>
                <button onClick={() => setAlignment('center')} className="btn btn-success">TEXT CENTER</button>
                <button onClick={() => setAlignment('end')} className="btn btn-dark">TEXT RIGHT</button>
            </div>
            <p className={`text-${alignment}`}>Text to align</p>
        </section>
    );
}