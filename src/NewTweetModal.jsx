import {useState} from 'react';
import { Modal } from '@mui/material';

function NewTweetModal(props) {
    return (
        <Modal
            open={props.newTweetForm}
            onClose={() => props.setNewTweetForm(false)}
        >
            <div>
                Text in a modal
            </div>
        </Modal>
    )
}

export { NewTweetModal }
