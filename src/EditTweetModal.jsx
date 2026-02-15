import {useState} from 'react';
import { Modal } from '@mui/material';

function EditTweetModal(props) {
    return (
        <Modal
            open={props.editTweetForm}
            onClose={() => props.setEditTweetForm(false)}
        >
            <div>
                Text in a modal
            </div>
        </Modal>
    )
}

export { EditTweetModal }
