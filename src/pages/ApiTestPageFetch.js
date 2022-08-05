import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

const ApiTestPageFetch = () => {
  const [postData, setPostData] = useState("No data")
  const [respData, setRespData] = useState("no response")
  let titleRef = useRef()
  let bodyRef = useRef()
  let userIdRef = useRef()
  let btnRef = useRef()
  useEffect(() => {
    refetch()
  }, [])

  function refetch() {
    const randId = Math.floor(Math.random() * 200)
    console.log("randId", randId)

    /*
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${randId}`)
      .then((response) => {
        console.log(response)
        setPostData(JSON.stringify(response.data))
      })
      */

    fetch(`https://jsonplaceholder.typicode.com/todos/${randId}`)
      .then((response) => {
        console.log("response from fetch", response)
        return response.json()
      })
      .then((data) => {
        console.log("data from fetch", data)
        setPostData(JSON.stringify(data))
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const dataObj = {
      title: titleRef.current.value,
      body: bodyRef.current.value,
      userId: userIdRef.current.value,
    }

    btnRef.current.style.backgroundColor = "green"
    btnRef.current.style.color = "white"
    console.log("data object", dataObj)

    /*
    axios
      .post("https://jsonplaceholder.typicode.com/posts", dataObj)
      .then((response) => {
        console.log(response)
        setRespData(JSON.stringify(response.data))
      })
      .catch((error) => {
        console.log("error from post", error)
      })

    setTimeout(() => {
      btnRef.current.style.backgroundColor = "white"
      btnRef.current.style.color = "black"
    }, 2000)

    */

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObj),
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log("response data post", data)
        setRespData(JSON.stringify(data))
      })
  }

  return (
    <div>
      <Link to="/">Back to Home</Link>
      <h1>Api Test page</h1>
      <p>{postData}</p>
      <button
        onClick={() => {
          refetch()
        }}
      >
        Re fetch
      </button>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="title" ref={titleRef} />
        <input type="text" name="body" placeholder="body" ref={bodyRef} />
        <input
          type="text"
          name="userId"
          placeholder="user id"
          ref={userIdRef}
        />
        <button ref={btnRef}>Submit</button>
      </form>
      <h3>Response</h3>
      <p>{respData}</p>
    </div>
  )
}

export default ApiTestPageFetch
