import "../styles/globals.css";
import FormContext from "../components/context/dateContext";

function MyApp({ Component, pageProps }) {
  return (
    <FormContext>
      <Component {...pageProps} />
    </FormContext>
  );
}

export default MyApp;
