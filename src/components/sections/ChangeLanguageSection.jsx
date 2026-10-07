import { useState } from "react";

export default function ChangeLanguageSection() {

    // Visualizza un messaggio di benvenuto che si aggiorni in tempo reale scegliendo tra diverse lingue tramite una serie di bottoni dedicati
    const [welcome, setWelcome] = useState('Benvenuto!');

    return (
        <section className="container my-5 text-center">
            <h2>Change Language Section</h2>
            <div className="my-4">
                <p className="fs-3 fw-bold my-3 text-primary">
                    {welcome}
                </p>
                <div className="d-flex gap-3 justify-content-center">
                    <button onClick={() => setWelcome('Benvenuto!')} className="btn btn-primary">ITALIAN</button>
                    <button onClick={() => setWelcome('Welcome!')} className="btn btn-success">ENGLISH</button>
                    <button onClick={() => setWelcome('Bienvenido!')} className="btn btn-warning">SPANISH</button>
                </div>
            </div>
        </section>
    );
}