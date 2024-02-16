import { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { removeSkill } from '../../api/skill'
import messages from '../shared/AutoDismissAlert/messages'
import EditSkillModal from './EditSkillModal'

const SkillShow = (props) => {
    const { skill, user, character, triggerRefresh, msgAlert } = props
    const [editModalShow, setEditModalShow] = useState(false)

    const destroySkill = () => {
        removeSkill(user, character.id, skill.id)
            .then(() => {
                msgAlert({
                    heading: 'Skill Forgotten!',
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())

            .catch(err => {
                msgAlert({
                    heading: 'Uh Oh...',
                    message: messages.generalError,
                    variant: 'danger'
                })
            })
    }

    return (
        <>
            <Card className='m-2'>
                <Card.Header>{skill.name}</Card.Header>
                <Card.Body>
                    <small>{skill.description}</small>
                </Card.Body>
                <br/>
                <Card.Footer>
                    {
                        user && character.owner && user.id === character.owner.id
                        ?
                        <>
                            <Button
                                className='m-2'
                                variant='warning'
                                onClick={() => setEditModalShow(true)}
                            >
                                Update Skill
                            </Button>
                            <Button
                                className='m-2'
                                variant='danger'
                                onClick={() => destroySkill()}
                            >
                                Delete Skill
                            </Button>
                        </>
                        :
                        null
                    }
                </Card.Footer>
            </Card>
            <EditSkillModal 
                user={user}
                character={character}
                skill={skill}
                show={editModalShow}
                handleClose={() => setEditModalShow(false)}
                msgAlert={msgAlert}
                triggerRefresh={triggerRefresh}
            />
        </>
    )
}

export default SkillShow