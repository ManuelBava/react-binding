import { useState } from "react";

export default function ValutaChanger() {
  // Stato per la valuta corrente (inizialmente "EUR")
  const [currency, setCurrency] = useState("EUR");
  // Stato per il prezzo numerico
  const [price, setPrice] = useState(100000);

  const tassiDiCambio = {
    EUR: 1.0,
    USD: 1.12,
    GBP: 0.84,
  };

  const simboliValuta = {
    EUR: "€",
    USD: "$",
    GBP: "£",
  };

  function cambiaValuta(importo, da, a) {
    const importoInEuro = importo / tassiDiCambio[da];
    const risultato = importoInEuro * tassiDiCambio[a];
    return risultato.toFixed(2);
  }

  const handleCurrencyChange = (e) => {
    const nuovaValuta = e.target.value;

    // currency = valuta precedente ("da")
    // nuovaValuta = valuta nuova ("a")
    const nuovoPrezzo = cambiaValuta(price, currency, nuovaValuta);

    setPrice(nuovoPrezzo);
    setCurrency(nuovaValuta);
  };

  return (
    <section>
      <h2 className="h1 my-5">
        {`HOUSE FOR SALE AT ${price} ${simboliValuta[currency]}`}
      </h2>
      <div>
        <label htmlFor="prices" className="form-label">
          Prices select
        </label>
        <select
          value={currency}
          onChange={handleCurrencyChange}
          className="form-control"
          id="prices"
        >
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
        </select>
      </div>
    </section>
  );
}
