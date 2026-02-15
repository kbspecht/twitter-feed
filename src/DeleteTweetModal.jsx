import { Modal, Box } from '@mui/material';

function deleteTweet(props) {
    props.setDeleteTweetForm(false);
    let newFeed = [...props.feed];
    newFeed.splice(props.tweetIndex, 1);
    props.setFeed(newFeed);
    props.setTweetIndex(null);
}

function DeleteTweetModal(props) {
    return (
        <Modal
            open={props.deleteTweetForm}
            onClose={() => {props.setTweetIndex(null); props.setDeleteTweetForm(false);}}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'white',
                    padding: 3,
                    borderRadius: 1,
                    boxShadow: 24
                }}
            >
                <h2>Delete Tweet</h2>
                <p>Are you sure you want to delete this tweet?</p>
                <button onClick={() => deleteTweet(props)}>Delete</button>
                <button onClick={() => {props.setTweetIndex(null); props.setDeleteTweetForm(false);}}>Cancel</button>
            </Box>
        </Modal>
    )
}

export { DeleteTweetModal }
