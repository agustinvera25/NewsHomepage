import image1 from "../../assets/images/image-retro-pcs.jpg"
import image2 from "../../assets/images/image-top-laptops.jpg"
import image3 from "../../assets/images/image-gaming-growth.jpg"
import "../styles/Listcards.css"
export default function Listcards (){

    return  <section className="presentacion-tarjetas">

    <article className="tarjeta bajada">

      <img src={image1} alt="" />
      <div >
        <h2 >01</h2>
        <h3 >Reiviving Retro PCs</h3>
        <p >What happens when oid PCs are given moderm upgrades?</p>
      </div>
    </article>

    <article className="tarjeta">
      <img src={image2} alt="" />
      <div>
        <h2 >02</h2>
        <h3 >Top 10 Laptops of 2022</h3>
        <p>Our best picks for various needs and budgets.</p>
      </div>
    </article>

    <article className="tarjeta">
      <img src={image3} alt="" />
      <div>
        <h2 >03</h2>
        <h3 >The Growth of Gaming</h3>
        <p>How the pandemic has sparked fresh opportunities.</p>
      </div>
    </article>

  </section>
}