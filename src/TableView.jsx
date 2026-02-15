import { useState } from 'react'
import { NewTweetModal } from './NewTweetModal'
import { DeleteTweetModal } from './DeleteTweetModal'
import { EditTweetModal } from './EditTweetModal'

function TableView(props){
    const [newTweetForm, setNewTweetForm] = useState(false);
    const [deleteTweetForm, setDeleteTweetForm] = useState(false);
    const [editTweetForm, setEditTweetForm] = useState(false);
    const [tweetIndex, setTweetIndex] = useState(null);

    return (
        <div>
            <button onClick={() => setNewTweetForm(true)}>Add New Tweet</button>
            <ul>
                {props.feed.map((tweet, index) => (
                <li key={index} className="tweet">
                    <p><strong>{tweet.source}</strong> ({tweet.datetime.toLocaleString()}):</p>
                    <p>{tweet.content}</p>
                    <p>Topic: {tweet.topic}</p>
                    <p>Followers: {tweet.number_followers} | Following: {tweet.number_following}</p>
                    <div>
                        <button onClick={() => {setTweetIndex(index); setDeleteTweetForm(true);}}>Delete Tweet</button>
                        <button onClick={() => {setTweetIndex(index); setEditTweetForm(true);}}>Edit Tweet</button>
                    </div>
                </li>
                ))}
            </ul>
            <NewTweetModal feed={props.feed} setFeed={props.setFeed} newTweetForm={newTweetForm} setNewTweetForm={setNewTweetForm} />
            <DeleteTweetModal tweetIndex={tweetIndex} setTweetIndex={setTweetIndex} feed={props.feed} setFeed={props.setFeed} deleteTweetForm={deleteTweetForm} setDeleteTweetForm={setDeleteTweetForm} />
            <EditTweetModal tweetIndex={tweetIndex} setTweetIndex={setTweetIndex} feed={props.feed} setFeed={props.setFeed} editTweetForm={editTweetForm} setEditTweetForm={setEditTweetForm} />
        </div>
    )
}

export default TableView
