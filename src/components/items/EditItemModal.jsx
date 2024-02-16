import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import ItemForm from '../shared/ItemForm'
import messages from '../shared/AutoDismissAlert/messages'
import { updateItem } from '../../api/item'

const EditItemModal = (props) => {
    const { user, show, handleClose, msgAlert, triggerRefresh, character } = props
    const [item, setItem] = useState(props.item)

    const onChange = (e) => {
        e.persist()
        setItem(prevItem => {
            const updatedName = e.target.name
            let updatedValue = e.target.value

            const updatedItem = { [updatedName] : updatedValue }

            return {
                ...prevItem, ...updatedItem
            }
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        updateItem(user, character, item)
            .then(() => handleClose())
            .then(() => {
                msgAlert({
                    heading: 'Item Updated!',
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            .catch(() => {
                msgAlert({
                    heading: 'Uh oh...',
                    message: messages.generalError,
                    variant: 'danger'
                })
            })
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>
                <ItemForm 
                    item={item}
                    handleChange={onChange}
                    handleSubmit={onSubmit}
                    heading="Update Item"
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditItemModal