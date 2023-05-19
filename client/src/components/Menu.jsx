import React from "react"
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import img4 from "../images/img4.jpg"

const Menu = () => {
  const posts = [
    {
      id: 1,
      title: "title one",
      desc: "this is a description for every one in this tutorial",
      img: img1,
    },
    {
      id: 2,
      title: "title two",
      desc: "this is a description for every one in this tutorial",
      img: img2,
    },
    {
      id: 3,
      title: "title three",
      desc: "this is a description for every one in this tutorial",
      img: img3,
    },
    {
      id: 4,
      title: "title four",
      desc: "this is a description for every one in this tutorial",
      img: img4,
    },
  ]
  return (
    <div className="menu">
      <h1>Other post you may like!</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="img post" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  )
}

export default Menu
