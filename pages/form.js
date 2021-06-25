import { useContext } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import { DateContext } from "../components/context/dateContext";
import FormInfo from "../components/form/formInfo";
import FormDate from "../components/form/formDate";
import FormMassage from "../components/form/formMassage";

function Contact() {
  const appContext = useContext(DateContext);

  const {
    formIndex,
    setFormIndex,
    setMassage,
    massage,
    setError,
    error,
  } = appContext;
  const handleClickNext = () => setFormIndex(formIndex + 1);
  const handleClickBack = () => setFormIndex(formIndex - 1);

  return (
    <Layout>
      <Head>
        <title>Massage | Rendez-Vous</title>
        <link rel='icon' href='/leaf.svg' />
      </Head>
      {formIndex === 0 ? (
        <FormMassage
          handleClickNext={handleClickNext}
          setMassage={setMassage}
          error={error}
          setError={setError}
          massage={massage}
        />
      ) : formIndex === 1 ? (
        <FormDate
          handleClickNext={handleClickNext}
          handleClickBack={handleClickBack}
        />
      ) : formIndex === 2 ? (
        <FormInfo
          handleClickNext={handleClickNext}
          handleClickBack={handleClickBack}
        />
      ) : null}
    </Layout>
  );
}

export default Contact;
