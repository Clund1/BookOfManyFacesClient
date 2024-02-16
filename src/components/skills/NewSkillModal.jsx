import React, {useState} from 'react'
import { Modal } from 'react-bootstrap'
import SkillForm from '../shared/SkillForm'
import { createSkill } from '../../api/skill'

// we'll also need the same props we're passing to the ToyForm, if they come from the parent

const NewSkillModal = (props) => {
    const { character, show, handleClose, msgAlert, triggerRefresh } = props
    const [skill, setSkill] = useState({})

    const onChange = (e) => {
        e.persist()
        setSkill(prevSkill => {
            const updatedName = e.target.name
            let updatedValue = e.target.value
            const updatedSkill = { [updatedName] : updatedValue }
            return {
                ...prevSkill, ...updatedSkill
            }
        })
    }
    
    const onSubmit = (e) => {
        e.preventDefault()

        createSkill(character, skill)
            .then(() => handleClose())
            .then(() => {
                msgAlert({
                    heading: 'Skill Obtained!',
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            .then(() => setSkill({}))
            .catch(err => {
                msgAlert({
                    heading: 'Reread The Texts!',
                    variant: 'danger'
                })
            })

    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>
                <SkillForm 
                    skill={skill}
                    handleChange={onChange}
                    handleSubmit={onSubmit}
                    heading={`${character.name} is learning!`}
                />
            </Modal.Body>
        </Modal>
    )
}

export default NewSkillModal