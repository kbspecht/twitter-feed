import { useState } from 'react'
import './App.css'

function App() {
  const [feed, setFeed] = useState([{"datetime": new Date("2024-03-25T12:00:00Z"), "source": "user1", "content": "Hello, world!", "topic": "test", "number_followers": 100, "number_following": 50},
    {"datetime": new Date("2024-03-26T15:30:00Z"), "source": "user2", "content": "Just had a great day!", "topic": "life", "number_followers": 200, "number_following": 150},
    {"datetime": new Date("2024-03-27T18:45:00Z"), "source": "user3", "content": "Check out my new blog post!", "topic": "blog", "number_followers": 300, "number_following": 250}
  ])

  return (
    <>
      <h1>Twitter Feed</h1>
      <ul>
        {feed.map((tweet, index) => (
          <li key={index} className="tweet">
            <p><strong>{tweet.source}</strong> ({tweet.datetime.toLocaleString()}):</p>
            <p>{tweet.content}</p>
            <p>Topic: {tweet.topic}</p>
            <p>Followers: {tweet.number_followers} | Following: {tweet.number_following}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
