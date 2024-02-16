import { Form, Button, Container } from 'react-bootstrap'

const ItemForm = (props) => {
    const { item, handleChange, handleSubmit, heading } = props

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='m-2'>
                    <Form.Label>Item: </Form.Label>
                    <Form.Select
                        aria-label="item"
                        name="item"
                        defaultValue={item.name}
                        onChange={handleChange}
                    >
                        <option>Choose An Item</option>
                        <option value="Arrows">Arrows</option>
                        <option value="Backpack">Backpack</option>
                        <option value="Bedroll">Bedroll</option>
                        <option value="Bell">Bell</option>
                        <option value="Blanket">Blanket</option>
                        <option value="Block and Tackle">Block and Tackle</option>
                        <option value="Buckler">Buckler</option>
                        <option value="Breastplate">Breastplate</option>
                        <option value="Caltrops">Caltrops</option>
                        <option value="Candle">Candle</option>
                        <option value="Canvas">Canvas</option>
                        <option value="Chain Shirt">Chain Shirt</option>
                        <option value="Chalk">Chalk</option>
                        <option value="Climbing Kit">Climbing Kit</option>
                        <option value="Crossbow">Crossbow</option>
                        <option value="Dagger">Dagger</option>
                        <option value="Fishnet">Fishnet</option>
                        <option value="Fishing Hook">Fishing Hook</option>
                        <option value="Flask">Flask</option>
                        <option value="Flint and Steel">Flint and Steel</option>
                        <option value="Full Plate">Full Plate</option>
                        <option value="Grappling Hook">Grappling Hook</option>
                        <option value="Greatsword">Greatsword</option>
                        <option value="Hammer">Hammer</option>
                        <option value="Healer’s Tools">Healer’s Tools</option>
                        <option value="Holy Water">Holy Water</option>
                        <option value="Lantern">Lantern</option>
                        <option value="Leather Armor">Leather Armor</option>
                        <option value="Linguistics">Linguistics</option>
                        <option value="Lore">Lore</option>
                        <option value="Longbow">Longbow</option>
                        <option value="Longsword">Longsword</option>
                        <option value="Medicine">Medicine</option>
                        <option value="Mirror">Mirror</option>
                        <option value="Mug">Mug</option>
                        <option value="Nature">Nature</option>
                        <option value="Occultism">Occultism</option>
                        <option value="Parchment">Parchment</option>
                        <option value="Performance">Performance</option>
                        <option value="Perception">Perception</option>
                        <option value="Piton">Piton</option>
                        <option value="Pole">Pole</option>
                        <option value="Pot">Pot</option>
                        <option value="Pouch">Pouch</option>
                        <option value="Quiver">Quiver</option>
                        <option value="Rations">Rations</option>
                        <option value="Religion">Religion</option>
                        <option value="Robe">Robe</option>
                        <option value="Rope">Rope</option>
                        <option value="Sack">Sack</option>
                        <option value="Scale Mail">Scale Mail</option>
                        <option value="Shortbow">Shortbow</option>
                        <option value="Shortsword">Shortsword</option>
                        <option value="Sledge">Sledge</option>
                        <option value="Society">Society</option>
                        <option value="Spike">Spike</option>
                        <option value="Spyglass">Spyglass</option>
                        <option value="Stealth">Stealth</option>
                        <option value="Survival">Survival</option>
                        <option value="Tent">Tent</option>
                        <option value="Thievery">Thievery</option>
                        <option value="Torch">Torch</option>
                        <option value="Tower Shield">Tower Shield</option>
                        <option value="Vial">Vial</option>
                        <option value="Waterskin">Waterskin</option>
                        <option value="Whetstone">Whetstone</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className='m-2'>
                    <Form.Label>Description: </Form.Label>
                    <Form.Control 
                        placeholder="description"
                        id="description"
                        name="description"
                        value={ item.description }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button className="m-2" type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default ItemForm 