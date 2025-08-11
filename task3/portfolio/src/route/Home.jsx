// src/pages/Home.jsx
const glassCardStyle = {
  background: "rgba(255,255,255,0.15)",
  boxShadow: "0 8px 32px 0 rgba(31,38,135,0.37)",
  backdropFilter: "blur(9px)",
  borderRadius: "16px",
  border: "1px solid rgba(255,255,255,0.3)",
  color: "#222",
  padding: "2rem",
  width: "400px",
  margin: "2rem auto",
  textAlign: "center",
};

export default function Home() {
  return (
    <div style={{
	display: "flex",
        justifyContent:"center",
        alignItems: "center",
        height: "90vh",
        width: "100vw",
        background:"#e0e7ef"
     }}>
      <div style={glassCardStyle}>
        <img src="https://tenzinkalsang.site/assets/images/profile-picture-webp.webp" alt="Nt" 
        	style={{
        		borderRadius:"50%",
        		width:"200px",
        		height : "160px",
        		marginTop:"1rem",
        		marginBottom:"1rem",
        		paddingBottom : "5px",
        		paddingTop : "5px",
        	}} 
        />
        <h2>TENZIN KALSANG</h2>
        <h3>Aspiring Software Engineer</h3><h4>Curious Mind · Tech Enthusiast · Lifelong Learner</h4>
        <p>Passionate about solving Real World problems Exploring innovative solutions Driven by curiosity Always learning and Improving</p>
      </div>
    </div>
  );
}
