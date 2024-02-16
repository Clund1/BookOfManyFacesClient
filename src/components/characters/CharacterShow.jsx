import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { getOneChar, RemoveCharacter, updateCharacter } from '../../api/character'
import LoadingScreen from '../shared/LoadingScreen'
import messages from '../shared/AutoDismissAlert/messages'
import EditCharacterModal from './EditCharModal'
import SkillShow from '../skills/SkillShow'
import NewSkillModal from '../skills/NewSkillModal'
import ItemShow from '../items/ItemShow'
import NewItemModal from '../items/NewItemModal'

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const CharacterShow = (props) => {
    const { charId } = useParams()
    const { user, msgAlert } = props

    const [character, setChar] = useState(null)

    const [editModalShow, setEditModalShow] = useState(false)
    const [skillModalShow, setSkillModalShow] = useState(false)
    const [itemModalShow, setItemModalShow] =useState(false)

    const [updated, setUpdated] = useState(false)
    const navigate = useNavigate()
    console.log('CharID' + charId)
    useEffect(() => {
        getOneChar(charId)
            .then(res => setChar(res.data.character))
            .catch(err => {
                msgAlert({
                    heading: 'Oh..',
                    message: messages.generalError,
                    variant: 'danger'
                })
            })
    }, [updated])

    const removeCharacter = () => {
        RemoveCharacter(user, character._id)
        .then(() => {
            msgAlert({
                heading:'BANISHED',
                message:'You have been removed from the book!',
                variant:'success'
            })
        })
        .then(() => navigate('/'))
        .catch(err => {
            msgAlert({
                heading: 'Oh.. You are still here?',
                message: messages.generalError,
                variant: 'danger'
            })
        })
    }

    let skillCards
    if (character) {
        if (character.skills.length > 0) {
            skillCards = character.skills.map(skill => (
                <SkillShow 
                    key={skill.id}
                    skill={skill}
                    character={character}
                    user={user}
                    msgAlert={msgAlert}
                    triggerRefresh={() => setUpdated(prev => !prev)}
                />
            ))
        } else {
            skillCards = <p>No Skills... What a waste.</p>
        }
    }
    let itemCards
    if (character) {
        if (character.items.length > 0) {
            skillCards = character.items.map(item => (
                <ItemShow 
                    key={item.id}
                    item={item}
                    character={character}
                    user={user}
                    msgAlert={msgAlert}
                    triggerRefresh={() => setUpdated(prev => !prev)}
                />
            ))
        } else {
            itemCards = <p>No Items... Wont be long.</p>
        }
    }


    if (!character) {
        return LoadingScreen
    }

    return (
        <>
        <Container className='m-2'>
            <Card key ={character.id}>
                <Card.Header>
                    { character.namePlate }
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        <small>Age: {character.age.enum}</small>
                        <small>Level: {character.level.enum}</small>
                        <small>Race: {character.race.enum}</small>
                        <small>Class: {character.class.enum}</small>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    {
                        character.owner && user && character.owner.id === user.id
                        ?
                        <>
                            <Button
                                className='m-2'
                                variant='info'
                                onClick={() => setSkillModalShow(true)}
                            >
                                Add Skills
                            </Button>
                            <Button
                                className='m-2'
                                variant='info'
                                onClick={() => setItemModalShow(true)}
                            >
                                Add Items
                            </Button>
                            <Button
                                className='m-2' 
                                variant='warning' 
                                onClick={() => setEditModalShow(true)}
                            >
                                Edit Details
                            </Button>
                            <Button 
                                className='m-2' 
                                variant='danger' 
                                onClick={() => removeCharacter}
                            >
                                Banish Character
                            </Button>
                        </>
                        :
                        null
                    }
                    <br/>
                    {
                        character.owner ? character.owner.email : null
                    }
                </Card.Footer>
            </Card>
        </Container>
        <Container className='m-2' style={{cardContainerLayout}}>
            {skillCards}
        </Container>
        <Container className='m-2' style={{cardContainerLayout}}>
            {itemCards}
        </Container>
        <EditCharacterModal
            user={user}
            show={editModalShow}
            updateCharacter={updateCharacter}
            msgAlert={msgAlert}
            handleClose={() => setEditModalShow(false)}
            character={character}
            triggerRefresh={() => setUpdated(prev => !prev)}
        />
        <NewSkillModal
            character={character}
            show={skillModalShow}
            msgAlert={msgAlert}
            handleClose={() => setSkillModalShow(false)}
            triggerRefresh={() => setUpdated(prev => !prev)}
        />
        <NewItemModal
            character={character}
            show={itemModalShow}
            msgAlert={msgAlert}
            handleClose={() => setItemModalShow(false)}
            triggerRefresh={() => setUpdated(prev => !prev)}
        />
        </>
    )
}

export default CharacterShow