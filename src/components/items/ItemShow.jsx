import { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { removeItem } from '../../api/item'
import messages from '../shared/AutoDismissAlert/messages'
import EditItemModal from './EditItemModal'

const ItemShow = (props) => {
    const { item, user, character, triggerRefresh, msgAlert } = props
    const [editModalShow, setEditModalShow] = useState(false)

    const destroyItem = () => {
        removeItem(user, character.id, item.id)
            .then(() => {
                msgAlert({
                    heading: 'Item Destroyed',
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            .catch(err => {
                msgAlert({
                    heading: 'Oh no!',
                    message: messages.generalError,
                    variant: 'danger'
                })
            })
    }

    return (
        <>
            <Card className='m-2'>
                <Card.Header>{item.name}</Card.Header>
                <Card.Body>
                    <small>{item.description}</small>
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
                                Update Item
                            </Button>
                            <Button
                                className='m-2'
                                variant='danger'
                                onClick={() => destroyItem()}
                            >
                                Delete Item
                            </Button>
                        </>
                        :
                        null
                    }
                </Card.Footer>
            </Card>
            <EditItemModal 
                user={user}
                character={character}
                item={item}
                show={editModalShow}
                handleClose={() => setEditModalShow(false)}
                msgAlert={msgAlert}
                triggerRefresh={triggerRefresh}
            />
        </>
    )
}

export default ItemShow