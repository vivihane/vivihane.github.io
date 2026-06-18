import gameboy from "../assets/gameboy.jpg";
import "./GameBoy.css";

export default function GameBoy() {
  return (
    <div className="gameboy-container">
      <img 
        src={gameboy}
        className="gameboy-img"
      />

      <div className="gameboy-screen">
        <h1>Vivi</h1>

        <div className="gameboy-menu">
          <button className="menu-btn active">
            <span className="cursor">▶</span> About me
          </button>
          <button className="menu-btn">
            <span className="cursor"></span> Projects
          </button>
          <button className="menu-btn">
            <span className="cursor"></span> Skills
          </button>
          <button className="menu-btn">
            <span className="cursor"></span> Contact
          </button>
        </div>
      </div>
    </div>
  );
}  