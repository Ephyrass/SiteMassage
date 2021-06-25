import { useEffect, useContext } from "react";
import { Massage } from "../massage";
import { DateContext } from "../context/dateContext";

function formMassage({
  handleClickNext,
  setMassage,
  massage,
  error,
  setError,
}) {
  useEffect(() => {
    setMassage([]);
  }, []);

  const handleError = () => {
    if (massage.length < 1) {
      setError(true);
    } else {
      setError(false);
      handleClickNext();
    }
  };

  return (
    <div className='massages-container'>
      <section className='contact_section'>
        <h2 style={{ textAlign: "center" }}>Selectionner votre massage</h2>
        {error ? (
          <p className='error-message'>
            Veuillez choisir un massage pour continuer
          </p>
        ) : null}
        <div>
          <Massage
            time='30 minutes'
            title='Massage de la tête à domicile : 30min'
            description='Massage de la tête à domicile'
            price='30 €'
          />
          <Massage
            time='45 minutes'
            title='Massage Anti Stress à domicile : 45min'
            description='Massage de la tête à domicile'
            price='40 €'
          />
          <Massage
            time='1 heure'
            title='Massage Anti Stress à domicile: 60min'
            description='Massage de la tête à domicile'
            price='50 €'
          />

          <Massage
            time='1 heure 30 minutes'
            title='Massage Anti Stress à domicile : 90min'
            description='Massage de la tête à domicile'
            price='70 €'
          />
        </div>

        <button
          className={error ? "button-continue error" : "button-continue"}
          onClick={handleError}
        >
          Continuer
        </button>
      </section>
    </div>
  );
}

export default formMassage;
