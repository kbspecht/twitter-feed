import { useState } from 'react'
import { NewTweetModal } from './NewTweetModal'
import { DeleteTweetModal } from './DeleteTweetModal'
import { EditTweetModal } from './EditTweetModal'

function TableView(props){
    const [newTweetForm, setNewTweetForm] = useState(false);
    const [deleteTweetForm, setDeleteTweetForm] = useState(false);
    const [editTweetForm, setEditTweetForm] = useState(false);
    const [tweetIndex, setTweetIndex] = useState(null);
    const [filterField, setFilterField] = useState('datetime');
    const [filter, setFilter] = useState('All');
    const [sortBy, setSortBy] = useState('datetime');
    const [sortOrder, setSortOrder] = useState('desc');

    // Filter tweets
    const datetimes = [...new Set(props.feed.map(t => t.datetime.toISOString().slice(0,16)))];
    const sources = [...new Set(props.feed.map(t => t.source))];
    const contents = [...new Set(props.feed.map(t => t.content))];
    const topics = [...new Set(props.feed.map(t => t.topic))];
    const followers = [...new Set(props.feed.map(t => t.number_followers))];
    const following = [...new Set(props.feed.map(t => t.number_following))];
    
    let filteredTweets = filter === 'All' ? props.feed : props.feed.filter(t => t[filterField] === filter || (filterField === 'datetime' && t.datetime.toISOString().slice(0,16) === filter));

    // Sort tweets
    let sortedTweets = [...filteredTweets].sort((a, b) => {
        let aVal, bVal;
        if (sortBy === 'datetime') {
            aVal = a.datetime;
            bVal = b.datetime;
        } else if (sortBy === 'source') {
            aVal = a.source.toLowerCase();
            bVal = b.source.toLowerCase();
        } else if (sortBy === 'content') {
            aVal = a.content.toLowerCase();
            bVal = b.content.toLowerCase();
        } else if (sortBy === 'topic') {
            aVal = a.topic.toLowerCase();
            bVal = b.topic.toLowerCase();
        } else if (sortBy === 'followers') {
            aVal = a.number_followers;
            bVal = b.number_followers;
        } else if (sortBy === 'following') {
            aVal = a.number_following;
            bVal = b.number_following;
        }
        if (sortOrder === 'asc') {
            return aVal > bVal ? 1 : -1;
        } else {
            return aVal < bVal ? 1 : -1;
        }
    });

    return (
        <div>
            <button onClick={() => setNewTweetForm(true)}>Add New Tweet</button>
            <div>
                <label>Filter by:</label>
                <select value={filterField} onChange={e => {setFilter('All'); setFilterField(e.target.value);}}>
                    <option value="datetime">Date/Time</option>
                    <option value="source">Source</option>
                    <option value="content">Content</option>
                    <option value="topic">Topic</option>
                    <option value="followers">Followers</option>
                    <option value="following">Following</option>
                </select>
                <select value={filter} onChange={e => setFilter(e.target.value)}>
                    <option value="All">All</option>
                    {filterField === 'datetime' && datetimes.map(t => <option key={t} value={t}>{t}</option>)}
                    {filterField === 'source' && sources.map(t => <option key={t} value={t}>{t}</option>)}
                    {filterField === 'content' && contents.map(t => <option key={t} value={t}>{t}</option>)}
                    {filterField === 'topic' && topics.map(t => <option key={t} value={t}>{t}</option>)}
                    {filterField === 'followers' && followers.map(t => <option key={t} value={t}>{t}</option>)}
                    {filterField === 'following' && following.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
                <label>Sort by: </label>
                <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                    <option value="datetime">Date/Time</option>
                    <option value="source">Source</option>
                    <option value="content">Content</option>
                    <option value="topic">Topic</option>
                    <option value="followers">Followers</option>
                    <option value="following">Following</option>
                </select>
                <label>Order: </label>
                <select value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
                    <option value="desc">Descending</option>
                    <option value="asc">Ascending</option>
                </select>
                <button onClick={() => {setFilter('All'); setSortBy('datetime'); setSortOrder('desc');}}>Clear Filters</button>
            </div>
            <ul>
                {sortedTweets.map((tweet) => {
                    const originalIndex = props.feed.indexOf(tweet);
                    return (
                        <li key={originalIndex} className="tweet">
                            <p><strong>{tweet.source}</strong> ({tweet.datetime.toISOString().slice(0,16)}):</p>
                            <p>{tweet.content}</p>
                            <p>Topic: {tweet.topic}</p>
                            <p>Followers: {tweet.number_followers} | Following: {tweet.number_following}</p>
                            <div>
                                <button onClick={() => {setTweetIndex(originalIndex); setDeleteTweetForm(true);}}>Delete Tweet</button>
                                <button onClick={() => {setTweetIndex(originalIndex); setEditTweetForm(true);}}>Edit Tweet</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <NewTweetModal feed={props.feed} setFeed={props.setFeed} newTweetForm={newTweetForm} setNewTweetForm={setNewTweetForm} />
            <DeleteTweetModal tweetIndex={tweetIndex} setTweetIndex={setTweetIndex} feed={props.feed} setFeed={props.setFeed} deleteTweetForm={deleteTweetForm} setDeleteTweetForm={setDeleteTweetForm} />
            <EditTweetModal tweetIndex={tweetIndex} setTweetIndex={setTweetIndex} feed={props.feed} setFeed={props.setFeed} editTweetForm={editTweetForm} setEditTweetForm={setEditTweetForm} />
        </div>
    )
}

export default TableView
