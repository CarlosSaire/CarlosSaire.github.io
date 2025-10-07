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
    }, 4000);

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

  // Crear corazones flotando
  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement("div");
      heart.textContent = "💖";
      heart.style.position = "fixed";
      heart.style.left = `${Math.random() * 90 + 5}%`;
      heart.style.top = "100%";
      heart.style.fontSize = `${Math.random() * 20 + 20}px`;
      heart.style.opacity = "0.8";
      heart.style.pointerEvents = "none";
      heart.style.transition = "all 3s linear";
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.style.top = `${Math.random() * 30}%`;
        heart.style.opacity = "0";
      }, 50);

      setTimeout(() => {
        heart.remove();
      }, 3000);
    };

    const interval = setInterval(createHeart, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        minHeight: "100vh",
        fontFamily: "'Brush Script MT', cursive",
        padding: "20px",
        background: "linear-gradient(to bottom, #ffe6f0, #ffccff)",
        color: "#800080",
      }}
    >
      <h1 style={{ fontSize: "4rem", marginBottom: "10px", textShadow: "2px 2px 10px #ff99cc" }}>
        💌 9.25 💌
      </h1>
      <p style={{ fontSize: "1.5rem" }}>Para ti, mi amor, con música y fotos 🎶</p>

      <button
        onClick={toggleAudio}
        style={{
          fontSize: "1.5rem",
          padding: "15px 40px",
          borderRadius: "25px",
          border: "none",
          backgroundColor: isPlaying ? "#800080" : "#ff69b4",
          color: "#fff",
          cursor: "pointer",
          boxShadow: "0 6px 15px rgba(0,0,0,0.3)",
          margin: "20px 0",
          transition: "all 0.3s ease",
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
          height: "400px",
          borderRadius: "25px",
          overflow: "hidden",
          boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
        }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img as string}
            alt={`Foto ${index + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              opacity: currentImage === index ? 1 : 0,
              transition: "opacity 2s ease-in-out, transform 4s ease-in-out",
              transform: currentImage === index ? "scale(1.05)" : "scale(1)",
              borderRadius: "25px",
            }}
          />
        ))}
      </div>

      <p style={{ marginTop: "30px", fontSize: "1.2rem", fontStyle: "italic" }}>
        💖 Solo para ti, mi amor 💖
      </p>
    </div>
  );
}

export default Page925;
