import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";
import copertina from "../../public/600x300_botero.jpg";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.copertina}>
        <Image
          src={copertina}
          width={"100%"}
          className={"img"}
          alt="copertina"
        />
        <p>
          La mostra{" "}
          <strong>
            “ricordando Fernando Botero, Via Crucis - La passione di Cristo”
          </strong>{" "}
          sarà dal <strong>20 Aprile al 21 Luglio a Torino</strong>, al Mastio
          della Cittadella. <strong>Fernando Botero</strong>, nato il 19 aprile
          1932 a Medellín, in Colombia, <strong>scomparso il 15/09/2023</strong>
          , è stato un pittore, scultore e disegnatore colombiano.
        </p>
        <p>
          <strong>Viacrucis: la passione di Cristo</strong> è un ciclo di opere
          in cui l’artista, fedele al proprio linguaggio artistico, integra la
          tradizione della storia dell’arte occidentale con elementi
          contemporanei. Questa volta si tratta di un{" "}
          <strong>tema sacro</strong> e il suo sguardo sembra rivolgersi alla
          condizione umana, al dolore, all’ingiustizia e alla sofferenza nel
          mondo attuale.
        </p>
        <Link
          href={
            "https://www.navigaresrl.com/mostra/ricordando-fernando-botero-via-crucis-la-passione-di-cristo/"
          }
          className={styles.link}
        >
          Info Mostra
        </Link>
      </div>
      <div className={styles.iscrizione}>
        <h4>
          Iscriviti entro il 31 Dicembre alla nostra Waiting List per ricevere
          uno sconto del 30%
        </h4>
        <h5>
          * lo sconto verrà applicato SOLO per il biglietto INTERO FERIALE
          acquistato in biglietteria
        </h5>
        <Link
          href={
            "mailto:web@navigaresrl.com?subject= Waiting List Botero Torino"
          }
        >
          <p>SCRIVICI NOME E COGNOME</p>
        </Link>
        <h6>N.B : Cliccando su Invia autorizzi il trattamento dei tuoi dati</h6>
      </div>
      <div className={styles.footer}>
        Una produzione di
        <Link href={"https://www.navigaresrl.com/"}>NavigareSrl</Link>
      </div>
    </main>
  );
}
