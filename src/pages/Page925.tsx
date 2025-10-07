import { useEffect } from "react";

function Page925() {
  useEffect(() => {
    const audio = new Audio(`${import.meta.env.BASE_URL}Musics/9-25/Publico.mp3`);
    audio.loop = true;
    audio.volume = 0.5;

    const timeoutId = setTimeout(() => {
      audio.play().catch(() => {
        console.warn("⚠️ Bloqueado por el navegador, esperando clic...");

        const handleClick = () => {
          audio.play().then(() => {
            console.log("🎵 Música reproducida después del clic");
          });
          document.removeEventListener("click", handleClick);
        };

        document.addEventListener("click", handleClick);
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
      <p>La música intentará reproducirse automáticamente 🎶</p>
      <p>Si no suena, haz clic en cualquier parte ❤️</p>
    </div>
  );
}

export default Page925;
