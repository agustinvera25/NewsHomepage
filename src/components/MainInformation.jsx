import imageTitle from "../../assets/images/image-web-3-desktop.jpg";
import ListNew from "./ListNew";
import "../styles/MainInformation.css";

export default function MainInformation() {
  return (
    <section id="hero">
      <div className="descripcion">
        <img src={imageTitle} alt="" />
        <div className="eseContenedorBello">
          <h1>The bright future of web 3.0</h1>
          <div className="bajada">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil,
              nam aliquid amet numquam ex odio, voluptate debitis repellat
              soluta quod vitae repudiandae minus ad aut quisquam? Quo
              asperiores quos nemo!
            </p>
            <button>Read more</button>
          </div>
        </div>
      </div>
      <ListNew />
    </section>
  );
}
