import { useState } from "react"

export default function CounterSection() {
    const [count, setCount] = useState(0);
    // Implementa un contatore numerico incrementabile via bottone e aggiungi un pulsante dedicato per azzerare istantaneamente il valore
    return (
        <div className="container my-5 text-center">
            <div className="card my-4">
                <div className="card-body fs-2">
                    <p>{count}</p>
                </div>
            </div>
            <div className="d-flex gap-3 justify-content-center">
                <button className="btn btn-primary" onClick={() => { setCount(value => value + 1) }}>
                    INCREASE
                </button>
                <button className="btn btn-danger" onClick={() => { setCount(0) }}>
                    RESET
                </button>
                <button
                    className="btn btn-dark"
                    onClick={() => setCount(value => (value > 0 ? value - 1 : 0))}
                >
                    DECREASE
                </button>
            </div>
        </div >
    )
}