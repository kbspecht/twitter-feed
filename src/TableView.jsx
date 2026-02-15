import { useState } from 'react'

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
                        <button>Delete Tweet</button>
                        <button>Edit Tweet</button>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default TableView
