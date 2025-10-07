import { useEffect } from "react";

function Page925() {
  useEffect(() => {
    const audio = new Audio(`${import.meta.env.BASE_URL}Musics/9-25/Publico.mp3`);
    audio.loop = true;
    audio.volume = 0.5;

    // Esperar 1 segundo antes de reproducir (evita bloqueos en algunos navegadores)
    const timeoutId = setTimeout(() => {
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("🎵 Música iniciada automáticamente con delay");
          })
          .catch((err) => {
            console.warn("⚠️ El navegador bloqueó la reproducción:", err);
          });
      }
    }, 1000); // 1000 ms = 1 segundo

    // Limpiar cuando se cambie de página
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
    </div>
  );
}

export default Page925;
