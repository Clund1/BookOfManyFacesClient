import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import SkillForm from '../shared/SkillForm'
import messages from '../shared/AutoDismissAlert/messages'
import { updateSkill } from '../../api/skill'

const EditSkillModal = (props) => {
    const { user, show, handleClose, msgAlert, triggerRefresh, character } = props
    const [skill, setSkill] = useState(props.skill)

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
        updateSkill(user, character, skill)
            .then(() => handleClose())
            .then(() => {
                msgAlert({
                    heading: 'Skill Updated!',
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
                <SkillForm 
                    skill={skill}
                    handleChange={onChange}
                    handleSubmit={onSubmit}
                    heading="Update Skill"
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditSkillModal