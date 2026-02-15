import { useState } from 'react'
import { Tabs, Tab } from '@mui/material'
import TableView from './TableView'
import GraphView from './GraphView'
import './App.css'

function App() {
  const [feed, setFeed] = useState([{"datetime": new Date("2024-03-25T12:00:00Z"), "source": "user1", "content": "Hello, world!", "topic": "test", "number_followers": 100, "number_following": 50},
    {"datetime": new Date("2024-03-26T15:30:00Z"), "source": "user2", "content": "Just had a great day!", "topic": "life", "number_followers": 200, "number_following": 150},
    {"datetime": new Date("2024-03-27T18:45:00Z"), "source": "user3", "content": "Check out my new blog post!", "topic": "blog", "number_followers": 300, "number_following": 250}
  ])
  const [tab, setTab] = useState("table");

  return (
    <>
      <h1>Twitter Feed</h1>
      <Tabs value={tab} onChange={(event, newValue) => 
        setTab(newValue)}>
        <Tab label="Table View" value="table"/>
        <Tab label="Graph View" value="graph"/>
      </Tabs>
      { tab === "table" && <TableView feed={feed} setFeed={setFeed}/>}
      { tab === "graph" && <GraphView feed={feed} setFeed={setFeed}/>}
    </>
  )
}

export default App
