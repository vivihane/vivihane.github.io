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

        <ul>
          <li>▶ About me</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}