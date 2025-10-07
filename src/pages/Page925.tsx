import { useEffect } from "react";

function Page925() {
  useEffect(() => {
    const audio = new Audio(`${import.meta.env.BASE_URL}Musics/9-25/Publico.mp3`);
    audio.loop = true;
    audio.volume = 0.5;

    // Esperar clic del usuario para reproducir
    const handleClick = () => {
      audio.play().catch((err) => {
        console.warn("Error al intentar reproducir:", err);
      });
      document.removeEventListener("click", handleClick);
    };

    document.addEventListener("click", handleClick);

    // Limpiar al salir de la página
    return () => {
      audio.pause();
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Página 9.25</h1>
      <p>Haz clic en cualquier parte para reproducir la música 🎵</p>
    </div>
  );
}

export default Page925;
