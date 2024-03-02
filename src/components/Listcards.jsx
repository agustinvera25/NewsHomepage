import image1 from "../../assets/images/image-retro-pcs.jpg"
import image2 from "../../assets/images/image-top-laptops.jpg"
import image3 from "../../assets/images/image-gaming-growth.jpg"

export default function Listcards (){

    return  <section>
    <article>
      <img src={image1} alt="" />
      <div>
        <h2>01</h2>
        <h3>Reiviving Retro PCs</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
          nesciunt.
        </p>
      </div>
    </article>

    <article>
      <img src={image2} alt="" />
      <div>
        <h2>02</h2>
        <h3>Top ten laptops of 2022</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
          nesciunt.
        </p>
      </div>
    </article>

    <article>
      <img src={image3} alt="" />
      <div>
        <h2>03</h2>
        <h3>The Growth of Gaming</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
          nesciunt.
        </p>
      </div>
    </article>

  </section>
}