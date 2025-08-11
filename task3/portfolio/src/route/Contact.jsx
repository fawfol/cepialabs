import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";

export default function Contact() {
  const cardStyle = {
    overflow: "hidden",
    background: "rgba(255,255,255,0.15)",
    boxShadow: "0 4px 16px rgba(31,38,135,0.37)",
    backdropFilter: "blur(9px)",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.3)",
    padding: "1rem",
    color: "#000",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "transform 0.2s ease",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
        overflow: "hidden",
        width: "100vw",
        background: "#e0e7ef",
      }}
    >
      <form
        style={{
          color: "#000",
          background: "rgba(255,255,255,0.15)",
          boxShadow: "0 8px 32px 0 rgba(31,38,135,0.37)",
          backdropFilter: "blur(9px)",
          borderRadius: "16px",
          border: "1px solid rgba(255,255,255,0.3)",
          padding: "2rem",
          width: "400px",
          display: "flex",
          flexDirection: "column",
          
    justifyContent : "center",
    alignItems: "center",
          gap: "1em",
          marginBottom: "2rem",
        }}
      >
        <h2>let's connect through Gmail ... </h2>
        <input
          type="text"
          placeholder="Your Name"
          required
          style={{
            padding: ".6rem",
            borderRadius: "7px",
            width: "100%",
            border: "1px solid #ccc",
            background: "rgba(211, 211, 211, 0.6)",
            color: "#000",
            fontSize: "15px",
          }}
        />
        <input
          type="email"
          placeholder="Email"
          required
          style={{
            padding: ".6rem",
            width: "100%",
            borderRadius: "7px",
            border: "1px solid #ccc",
            background: "rgba(211, 211, 211, 0.6)",
            color: "#000",
            fontSize: "15px",
          }}
        />
        <textarea
          placeholder="Message"
          rows={4}
          required
          style={{
            borderRadius: "7px",
            padding: ".6rem",
            width: "100%",
            border: "1px solid #ccc",
            background: "rgba(211, 211, 211, 0.6)",
            resize: "none",
            color: "#000",
            fontSize: "12px",
          }}
        />
        <button
          type="submit"
          style={{
            background: "#3B82F6",
            color: "#fff",
            width : "100%",
            border: "none",
            borderRadius: "7px",
            padding: ".75em",
            fontWeight: "bold",
            transition: "transform 0.2s ease",
          }}
  	onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
	onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          SEND
        </button>
      </form>

      {/*socila links*/}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1rem",
          width: "100%",
          maxWidth: "450px",
        }}
      >
        <a
          href="https://linkedin.com/in/tenzin-kalsang-090985285"
          target="_blank"
          rel="noopener noreferrer"
          style={cardStyle}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <FaLinkedin size={40} color="#0A66C2"/>
          @tenzin-kalsang
        </a>

        <a
          href="https://instagram.com/tttt___kalsang"
          target="_blank"
          rel="noopener noreferrer"
          style={cardStyle}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <FaInstagram size={40} color="#E1306C" />
          @tttt___kalsang
        </a>

        <a
          href="https://github.com/fawfol"
          target="_blank"
          rel="noopener noreferrer"
          style={cardStyle}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <FaGithub size={40} color="#171515" />
          @fawfol
        </a>

        <a
          href="https://twitter.com/Hilarious_Monke"
          target="_blank"
          rel="noopener noreferrer"
          style={cardStyle}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <FaTwitter size={40} color="#1DA1F2" />
          @Hilarious_Monke
        </a>
      </div>
    </div>
  );
}
