import {useState} from 'react';
import { Modal } from '@mui/material';

function DeleteTweetModal(props) {
    return (
        <Modal
            open={props.deleteTweetForm}
            onClose={() => props.setDeleteTweetForm(false)}
        >
            <div>
                Text in a modal
            </div>
        </Modal>
    )
}

export { DeleteTweetModal }
