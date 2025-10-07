import { useEffect, useState } from "react";
import PublicoAudio from "../assets/images/9-25/Publico.mp3";

const images: string[] = Object.values(
  import.meta.glob("../assets/images/9-25/Foto*.jpg", { eager: true, import: "default" })
);

function Page925() {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const newAudio = new Audio(PublicoAudio);
    newAudio.loop = true;
    newAudio.volume = 0.5;
    setAudio(newAudio);

    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => {
      newAudio.pause();
      newAudio.currentTime = 0;
      clearInterval(intervalId);
    };
  }, []);

  const toggleAudio = () => {
    if (!audio) return;

    if (!isPlaying) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() =>
          alert("⚠️ Haz clic de nuevo para reproducir la música")
        );
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        backgroundColor: "#fff0f5",
        color: "#800080",
        minHeight: "100vh",
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>9.25 💖</h1>
      <p style={{ fontSize: "1.5rem" }}>Disfruta la música y las fotos 🎶</p>

      <button
        onClick={toggleAudio}
        style={{
          fontSize: "1.5rem",
          padding: "10px 30px",
          borderRadius: "15px",
          border: "none",
          backgroundColor: isPlaying ? "#800080" : "#ff69b4",
          color: "#fff",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          margin: "20px 0",
          transition: "transform 0.2s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        {isPlaying ? "Pausar música ⏸️" : "Reproducir música 🎵"}
      </button>

      <div
        style={{
          marginTop: "40px",
          position: "relative",
          height: "350px",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img as string} // 🔹 forzamos el tipo a string
            alt={`Foto ${index + 1}`}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              transition: "opacity 1s ease-in-out",
              opacity: currentImage === index ? 1 : 0,
              borderRadius: "20px",
            }}
          />
        ))}
      </div>

      <p style={{ marginTop: "30px", fontStyle: "italic" }}>
        💌 Solo para ti, mi amor 💌
      </p>
    </div>
  );
}

export default Page925;
