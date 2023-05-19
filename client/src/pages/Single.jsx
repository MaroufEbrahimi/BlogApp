import React from "react"
import { Link } from "react-router-dom"
import Img3 from "../images/img3.jpg"
import User1 from "../images/user1.jpg"
import Edit from "../images/Edit.png"
import Delete from "../images/Delete.png"
import Menu from "../components/Menu"

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src={Img3} alt="content img" />
        <div className="user">
          <img src={User1} alt="user img" />

          <div className="info">
            <span>Famous</span>
            <p>posted 2 days ago!</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="edit img" />
            </Link>
            <img src={Delete} alt="delete img" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sed.
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, odit
          sit. Sequi laudantium ipsum dicta illo. Nesciunt earum ea architecto
          iusto ratione! Quae quis optio mollitia aut debitis, maxime, alias
          nemo iste quas cum aperiam totam ex est laborum sunt ut quos placeat
          deleniti numquam impedit dolor vero ducimus? Facere quidem libero
          voluptatibus at obcaecati, quis quasi odit minima corporis? Laboriosam
          beatae illo praesentium at consequuntur labore hic a ex recusandae
          nihil ratione, vero dolores magni quisquam tempora?
        </p>
        <br />
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea at autem
          perspiciatis distinctio? Numquam cum recusandae magnam, rerum aut
          nostrum fugiat mollitia ad? Voluptatum dolorum modi blanditiis, ab
          harum rem possimus nostrum in alias laboriosam omnis libero deleniti
          voluptatibus suscipit?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          necessitatibus neque ipsum adipisci optio natus eveniet assumenda
          quibusdam. Ratione quos ullam aut quidem id temporibus soluta?
          Laudantium autem aut quibusdam obcaecati cupiditate tempore ut.
        </p>
      </div>

      <Menu />
    </div>
  )
}

export default Single
