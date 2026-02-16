import {useState, useEffect} from 'react';
import { Modal, Box } from '@mui/material';
import { use } from 'react';

function handleSubmit(e, props, datetime, source, content, topic, numberFollowers, numberFollowing) {
    e.preventDefault();
    let newFeed = [...props.feed];
    newFeed[props.tweetIndex] = {
        ...newFeed[props.tweetIndex],
        datetime: datetime,
        source: source,
        content: content,
        topic: topic,
        number_followers: numberFollowers,
        number_following: numberFollowing
    };
    props.setFeed(newFeed);
    props.setEditTweetForm(false);
    props.setTweetIndex(null);
}

function EditTweetModal(props) {
    const [datetime, setDatetime] = useState(new Date());
    const [source, setSource] = useState('');
    const [content, setContent] = useState('');
    const [topic, setTopic] = useState('');
    const [numberFollowers, setNumberFollowers] = useState(0);
    const [numberFollowing, setNumberFollowing] = useState(0);

    useEffect(() => {
        if (props.tweetIndex !== null) {
            let tweet = props.feed[props.tweetIndex];
            setDatetime(tweet.datetime);
            setSource(tweet.source);
            setContent(tweet.content);
            setTopic(tweet.topic);
            setNumberFollowers(tweet.number_followers);
            setNumberFollowing(tweet.number_following);
        }
    }, [props.tweetIndex]);

    return (
        <Modal
            open={props.editTweetForm}
            onClose={() => props.setEditTweetForm(false)}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'white',
                    color: 'black',
                    padding: 3,
                    borderRadius: 1,
                    boxShadow: 24
                }}
            >
                <h2>Edit Tweet</h2>
                <form onSubmit={(e) => handleSubmit(e, props, datetime, source, content, topic, numberFollowers, numberFollowing)}>
                    <div>
                        Date/Time:
                        <input type='datetime-local' name='datetime' value={datetime.toISOString().slice(0,16)} onChange={(e) => setDatetime(new Date(e.target.value))}/>
                    </div>
                    <div>
                        Source:
                        <input type='text' name='source' value={source} onChange={(e) => setSource(e.target.value)}/>
                    </div>
                    <div>
                        Content:
                        <input type='text' name='content' value={content} onChange={(e) => setContent(e.target.value)}/>
                    </div>
                    <div>
                        Topic:
                        <input type='text' name='topic' value={topic} onChange={(e) => setTopic(e.target.value)}/>
                    </div>
                    <div>
                        Number of Followers:
                        <input type='number' name='numberFollowers' value={numberFollowers} onChange={(e) => setNumberFollowers(parseInt(e.target.value))}/>
                    </div>
                    <div>
                        Number of Following:
                        <input type='number' name='numberFollowing' value={numberFollowing} onChange={(e) => setNumberFollowing(parseInt(e.target.value))}/>
                    </div>
                    <button type="submit">Submit</button>
                    <button onClick={() => props.setEditTweetForm(false)}>Cancel</button>
                </form>
            </Box>
        </Modal>
    )
}

export { EditTweetModal }
