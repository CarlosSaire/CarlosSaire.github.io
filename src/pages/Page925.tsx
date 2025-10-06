import React, { useEffect } from "react";

function Page925() {
  useEffect(() => {
    const audio = new Audio("/Musics/9-25/Publico.mp3");

    const handleClick = () => {
      audio.play().catch((err) => console.warn("Error al reproducir:", err));
      document.removeEventListener("click", handleClick);
    };

    document.addEventListener("click", handleClick);

    return () => {
      audio.pause();
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🎵 Página 9-25 🎶</h1>
      <p>Haz clic en cualquier parte para reproducir la música.</p>
    </div>
  );
}

export default Page925;
