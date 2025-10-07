import Foto1 from "../assets/Images/9-25/Foto1.jpg";
import Foto2 from "../assets/Images/9-25/Foto2.jpg";

function Page925() {
  // audio code aquí...

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
