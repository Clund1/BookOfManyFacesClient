import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import messages  from '../shared/AutoDismissAlert/messages'

import CharacterForm from "../shared/CharacterForm";
import { createCharacter } from "../../api/character";

const CharacterCreate = (props) => {
    const { user, msgAlert } = props

    const navigate = useNavigate

    const [character, setChar] = useState({
        name: '',
        level: '',
        class: '',
        race: '',
    })

    const onChange = (e) => {
        e.persist()
        setChar(prevChar => {
            const updatedName = e.target.name
            let updatedValue = e.target.value
            
            if (e.target.type === 'number') {
                updatedValue = parseInt(e.target.value)
            }

            const updatedChar = { [updatedName] : updatedValue }
            return{
                ...prevChar,...updatedChar
            }
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        createCharacter(user, character)
            .then(res => { navigate(`/characters/${res.data.character.id}`)})
            .then(() => {
                msgAlert({
                    heading: 'Welcome to The Book!',
                    variant: 'success'
                })
            })
            .catch(err => {
                msgAlert({
                    heading: 'You have been rejected from The Book!',
                    message: messages.generalError,
                    variant: 'warning'
                })
            })
    }

    return (
        <CharacterForm 
        character={character}
        handleChange={onChange}
        handleSubmit={onSubmit}
        heading="Who Are You?"
        />
    )
}
export default CharacterCreate