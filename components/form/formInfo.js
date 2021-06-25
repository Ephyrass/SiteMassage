import Link from "next/link";

function formInfo({ handleClickNext, handleClickBack }) {
  return (
    <div>
      <div className='massages-container'>
        <section className='contact_section'>
          <h2 style={{ textAlign: "center" }}>Renseigner vos informations</h2>

          <button className='button-back' onClick={handleClickBack}>
            Retour
          </button>

          <button className='button-continue' onClick={handleClickNext}>
            Continuer
          </button>
        </section>
      </div>
    </div>
  );
}

export default formInfo;
