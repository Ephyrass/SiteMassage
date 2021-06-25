import Link from "next/link";

function formDate({ handleClickNext, handleClickBack }) {
  return (
    <div className='massages-container'>
      <section className='contact_section'>
        <h2 style={{ textAlign: "center" }}>Selectionner une date</h2>

        <button className='button-back' onClick={handleClickBack}>
          Retour
        </button>

        <button className='button-continue' onClick={handleClickNext}>
          Continuer
        </button>
      </section>
    </div>
  );
}

export default formDate;
