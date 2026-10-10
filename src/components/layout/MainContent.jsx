import ActivityList from "../sections/ActivityList";
import ChangeBtnStyleSection from "../sections/ChangeBtnStyleSection";
import ChangeLanguageSection from "../sections/ChangeLanguageSection";
import CharactersCounter from "../sections/CharactersCounter";
import CounterSection from "../sections/CounterSection";
import TextAlignChangerSection from "../sections/TextAlignChangerSection";
import FilterNamesSection from "../sections/FilterNamesSection";
import UpdatingTag from "../sections/UpdatingTag";
import JoinInputs from "../sections/JoinInputs";
import CheckingStatus from "../sections/CheckingStatus";
import TextResizer from "../sections/TextResizer";
import ValutaChanger from "../sections/ValutaChanger";

export default function MainContent() {
  // mostra il numero di caratteri rimanenti da scrivere durante la digitazione in una textarea

  // mostra degli avvisi riguardo la quantità di testo scritto in una textarea (es. troppo corto, troppo lungo, lunghezza ottimale)
  return (
    <section className="container text-center">
      {/* <CounterSection />
            <ChangeBtnStyleSection />
            <TextAlignChangerSection />
            <ChangeLanguageSection /> 
            <ActivityList />
            */}

      {/* Contatore caratteri: mostra dinamicamente il numero di caratteri inseriti in una casella di input o textarea, aggiornando il conteggio ad ogni digitazione */}
      {/* <CharactersCounter /> */}

      {/* filtra istantaneamente un array di nomi visualizzati a schermo mostrando solo quelli che contengono la stringa digitata nell'input */}
      {/* <FilterNamesSection /> */}

      {/* // aggiorna il contenuto di un tag <h1> con il testo inserito dall'utente in una casella di input, sostituendo il valore precedente ad ogni modifica */}
      {/* <UpdatingTag /> */}

      {/* // unisci in tempo reale il valore di due input distinti (nome e cognome) visualizzando il risultato completo in un unico elemento di testo */}
      {/* <JoinInputs /> */}

      {/* // mantieni disabilitato un pulsante di azione finché l'utente non spunta una specifica casella di controllo per confermare la volontà di procedere */}
      {/* <CheckingStatus /> */}

      {/* // ridimensiona il testo della pagina in base al radio button selezionato dall'utente */}
      {/* <TextResizer /> */}

      {/* // converti e mostra il prezzo di un prodotto fisso in diverse valute (EUR, USD, GBP) aggiornando il simbolo e il valore in base alla select */}
      {/* <ValutaChanger /> */}
    </section>
  );
}
