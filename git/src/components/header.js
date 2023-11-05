import Seta from "./imgs/seta.png";
import Pfp from "./imgs/Pfp.png";

export default function Header() {
  return (
    <header>
      <button id="SetaVoltar">
        <img src={Seta} />
      </button>
      <div id="parentePic">
        <img src={Pfp} id="ProfilePic" />
      </div>
      <h1>Arthur de Araujo Neves</h1>
    </header>
  );
}
