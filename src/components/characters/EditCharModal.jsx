import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import CharacterForm from '../shared/CharacterForm'
import messages from '../shared/AutoDismissAlert/messages'

const EditCharacterModal = (props) => {
    const { user, show, handleClose, updateCharacter, msgAlert, triggerRefresh } = props
    const [character, setCharacter] = useState(props.character)

    const onChange = (e) => {
        e.persist()
        setCharacter(prevCharacter => {
            const updatedName = e.target.name
            let updatedValue = e.target.value
            if (e.target.type === 'number') {
                updatedValue = parseInt(e.target.value)
            }
            if (updatedName === e.target.checked) {
                updatedValue = true
            } 
            else if (updatedName === !e.target.checked) {
                updatedValue = false
            }
            const updatedCharacter = { [updatedName] : updatedValue }
            return {
                ...prevCharacter, ...updatedCharacter
            }
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        updateCharacter(user, character)
            .then(() => handleClose())
            .then(() => {
                msgAlert({
                    heading: 'Oh Yeah!',
                    message: messages.updateCharacterSuccess,
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            .catch(() => {
                msgAlert({
                    heading: 'Oh no!',
                    message: messages.generalError,
                    variant: 'danger'
                })
            })
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>
                <CharacterForm 
                    character={character}
                    handleChange={onChange}
                    handleSubmit={onSubmit}
                    heading="Update Character"
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditCharacterModal