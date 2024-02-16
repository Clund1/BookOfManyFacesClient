import apiUrl from '../apiConfig'
import axios from 'axios'

// READ => Index
export const getAllChars = () => {
    return axios(`${apiUrl}/characters`)
}

// READ => Show
export const getOneChar = (id) => {
    return axios(`${apiUrl}/characters/${id}`)
}

// CREATE => Add Character
export const createCharacter = (user, newCharacter) => {
    return axios({
        url: `${apiUrl}/characters`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { character: newCharacter }
    })
}

// UPDATE => Update Character
export const updateCharacter = (user, updatedCharacter) => {
    return axios({
        url: `${apiUrl}/characters/${updatedCharacter.id}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { character: updatedCharacter }
    })
}

// DELETE => Remove Character
export const RemoveCharacter = (user, id) => {
    return axios({
        url: `${apiUrl}/characters/${id}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        },
    })
}