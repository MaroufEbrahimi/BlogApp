import React from "react"
import img3 from "../images/img3.jpg"
import user1 from "../images/user1.jpg"

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src={img3} alt="content img" />
        <div className="user">
          <img src={user1} alt="user img" />
        </div>
      </div>
    </div>
  )
}

export default Single
