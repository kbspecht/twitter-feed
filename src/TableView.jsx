import { useState } from 'react'
import { NewTweetModal } from './NewTweetModal'
import { DeleteTweetModal } from './DeleteTweetModal'
import { EditTweetModal } from './EditTweetModal'

function TableView(props){
    const [newTweetForm, setNewTweetForm] = useState(false);
    const [deleteTweetForm, setDeleteTweetForm] = useState(false);
    const [editTweetForm, setEditTweetForm] = useState(false);

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
                        <button onClick={() => setDeleteTweetForm(true)}>Delete Tweet</button>
                        <button onClick={() => setEditTweetForm(true)}>Edit Tweet</button>
                    </div>
                    <DeleteTweetModal tweet={tweet} deleteTweetForm={deleteTweetForm} setDeleteTweetForm={setDeleteTweetForm} />
                    <EditTweetModal tweet={tweet} editTweetForm={editTweetForm} setEditTweetForm={setEditTweetForm} />
                </li>
                ))}
            </ul>
            <NewTweetModal newTweetForm={newTweetForm} setNewTweetForm={setNewTweetForm} />
        </div>
    )
}

export default TableView
