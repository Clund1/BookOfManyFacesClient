import apiUrl from '../apiConfig'
import axios from 'axios'

// Create Item
// POST	/items/:charId	
export const createItem = (character, newItem) => {
    return axios({
        url: `${apiUrl}/items/${character._id}`,
        method: 'POST',
        data: { item: newItem }
    })
}

// Update Item
// PATCH /items/:charId/:itemId	
export const updateItem = (user, character, updatedItem) => {
    return axios({
        url: `${apiUrl}/items/${character._id}/${updatedItem._id}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { item: updatedItem }
    })
}

// Delete Item
// DELETE	/items/:charId/:itemId	
export const removeItem = (user, charId, itemId) => {
    return axios({
        url: `${apiUrl}/toys/${charId}/${itemId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}