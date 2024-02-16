// IMPORT DEPENDENCIES //
// API
import { useState, useEffect } from 'react'
import { getAllChars } from "../../api/character"
// RENDERING
// import LoadingScreen from '../shared/LoadingScreen'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import messages from '../shared/AutoDismissAlert/messages'

// STYLING OBJECT
const cardContainerLayout = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
}

// DISPLAYS ALL CHARACTERS FROM API DATABASE
const CharacterIndex = (props) => {
    const [characters, setChars] = useState(null)
    const [error, setError] = useState(false)

    const { msgAlert } = props

    useEffect(() => {
        getAllChars()
            .then(res => {
                setChars(res.data.characters)
            })
            .catch(error => {
                msgAlert({
                    heading: 'Uh Oh..',
                    message: messages.generalError,
                    variant: 'danger'
                })
                setError(true)
            })
    }, [])
    
    // If Error
    // if (error) {
    //     return <LoadingScreen />
    // }
    // If No Data
    // if (!characters) {
    //     return <LoadingScreen />
    // } else if (characters.length === 0) {
    //     return <p> Nobody Here But Us Goblins... </p>
    // }
    const charCards = characters.map(character => (
        <Card key={character.id} style={{ width: '30%', margin: 5 }} >
            <Card.Header>{character.namePlate}</Card.Header>
            <Card.Body>
                <Card.Text>
                    <Link to={`/characters/${character.id}`} className='btn btn-primary'>
                        View {character.name}
                    </Link>
                </Card.Text>
                { character.owner ?
                    <Card.Footer>owner: {character.owner.email}</Card.Footer>
                    :
                    null
                }
            </Card.Body>
        </Card>
    ))
    return (
        <div className="container-md" style={ cardContainerLayout }>
            { charCards }
        </div>
    )
}
export default CharacterIndex