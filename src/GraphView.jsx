import { useState } from 'react'
import {
  BarChart, Bar, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts'

function GraphView(props) {
  const [chartType, setChartType] = useState('tweets-by-topic')

  // Data for tweets by topic
  const tweetsByTopic = () => {
    const topicCounts = {}
    props.feed.forEach(tweet => {
      topicCounts[tweet.topic] = (topicCounts[tweet.topic] || 0) + 1
    })
    return Object.entries(topicCounts).map(([topic, count]) => ({
      name: topic,
      count: count
    }))
  }

  // Data for followers/following distribution
  const followerStats = () => {
    return props.feed.map((tweet, idx) => ({
      name: tweet.source.substring(0, 10),
      followers: tweet.number_followers,
      following: tweet.number_following
    }))
  }

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7c7c', '#8dd1e1', '#d084d0']

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <label>Select Chart: </label>
        <select value={chartType} onChange={e => setChartType(e.target.value)}>
          <option value="tweets-by-topic">Tweets by Topic</option>
          <option value="followers-stats">Followers/Following Stats</option>
        </select>
      </div>

      {chartType === 'tweets-by-topic' && tweetsByTopic().length > 0 && (
        <div>
          <h3>Tweets by Topic</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={tweetsByTopic()}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" interval={0} angle={-45} textAnchor="end"/>
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" name="Number of Tweets" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {chartType === 'followers-stats' && followerStats().length > 0 && (
        <div>
          <h3>Followers vs Following</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={followerStats()}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" interval={0} angle={-45} textAnchor="end"/>
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="followers" fill="#8884d8" name="Followers" />
              <Bar dataKey="following" fill="#82ca9d" name="Following" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {props.feed.length === 0 && (
        <p>No tweets to display. Add some tweets to see charts.</p>
      )}
    </div>
  )
}

export default GraphView
