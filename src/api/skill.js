import apiUrl from '../apiConfig'
import axios from 'axios'

// Create Skill
// POST	/skills/:charId	
export const createSkill = (character, newSkill) => {
    return axios({
        url: `${apiUrl}/skills/${character._id}`,
        method: 'POST',
        data: { skill: newSkill }
    })
}

// Update Skill
// PATCH /skills/:charId/:skillId	
export const updateSkill = (user, character, updatedSkill) => {
    return axios({
        url: `${apiUrl}/skills/${character._id}/${updatedSkill._id}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { skill: updatedSkill }
    })
}

// Delete Skill
// DELETE	/skills/:charId/:skillId	
export const removeSkill = (user, charId, skillId) => {
    return axios({
        url: `${apiUrl}/skills/${charId}/${skillId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}