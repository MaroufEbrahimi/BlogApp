import React from "react"
import { Link } from "react-router-dom"

import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import img4 from "../images/img4.jpg"

const Home = () => {
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
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="post img" />
            </div>
            <div className="content">
              <Link to={`/post/${post.id}`} className="link">
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
