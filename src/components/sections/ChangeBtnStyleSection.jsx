import { useState } from "react";

export default function ChangeBtnStyleSection() {
    // Crea un bottone che alterni la propria classe stilistica (es. da primary a success) ad ogni click
    const [isPrimary, setIsPrimary] = useState(true);

    const toggleStyle = () => {
        setIsPrimary(prev => !prev);
    };

    return (
        <section className="my-5 text-center">
            <button
                className={`btn btn-${isPrimary ? 'primary' : 'success'}`}
                onClick={toggleStyle}
            >
                CHANGE CLASS
            </button>
        </section>
    );
}
