import { useState, useContext } from "react";
import tick from "../img/Tick.svg";
import { DateContext } from "../components/context/dateContext";

export function Massage({ price, title, description, time }) {
  const [confirm, setConfirm] = useState(false);

  const appContext = useContext(DateContext);

  const { massage, setMassage } = appContext;

  return (
    <div className='box-massage'>
      <div className='head-massage'>
        <p>{title}</p>
        <p>{price}</p>
      </div>
      <p className='description-massage'>{description}</p>
      <div className='footer-massage'>
        <p>{time}</p>
        <button
          className={confirm ? "confirm" : null}
          onClick={() => {
            setConfirm(!confirm);
            confirm === false
              ? setMassage((oldArray) => [...oldArray, title])
              : setMassage(massage.filter((item) => item !== title));
          }}
        >
          {confirm ? "" : null} <strong>Selectionner {tick}</strong>
        </button>
      </div>
    </div>
  );
}
