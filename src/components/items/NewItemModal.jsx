import React, {useState} from 'react'
import { Modal } from 'react-bootstrap'
import ItemForm from '../shared/ItemForm'
import messages from '../shared/AutoDismissAlert/messages'
import { createItem } from '../../api/item'

const NewItemModal = (props) => {
    const { character, show, handleClose, msgAlert, triggerRefresh } = props
    const [item, setItem] = useState({})

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

        createItem(character, item)
            .then(() => handleClose())
            .then(() => {
                msgAlert({
                    heading: 'Item Obtained!',
                    message: messages.createItemSuccess,
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            .then(() => setItem({}))
            .catch(err => {
                msgAlert({
                    heading: 'Reread The Texts!',
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
                    heading={`${character.name} is learning!`}
                />
            </Modal.Body>
        </Modal>
    )
}

export default NewItemModal