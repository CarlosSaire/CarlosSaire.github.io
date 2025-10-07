import { useEffect } from "react";
import Foto1 from "../assets/images/9-25/Foto1.jpg";
import Foto2 from "../assets/images/9-25/Foto2.jpg";
import PublicoAudio from "../assets/images/9-25/Publico.mp3";

function Page925() {
  useEffect(() => {
    const audio = new Audio(PublicoAudio);
    audio.loop = true;
    audio.volume = 0.5;

    const timeoutId = setTimeout(() => {
      audio.play().catch(() => {
        console.warn("⚠️ Bloqueado por el navegador, esperando clic...");
      });
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Página 9.25</h1>
      <p>La música comenzará en 1 segundo 🎶</p>

      <div style={{ marginTop: "30px" }}>
        <img src={Foto1} alt="Foto 1" style={{ maxWidth: "80%", marginBottom: "20px" }} />
        <br />
        <img src={Foto2} alt="Foto 2" style={{ maxWidth: "80%" }} />
      </div>
    </div>
  );
}

export default Page925;
