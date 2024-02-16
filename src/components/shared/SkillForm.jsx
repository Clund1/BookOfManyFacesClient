import { Form, Button, Container } from 'react-bootstrap'

const SkillForm = (props) => {
    const { skill, handleChange, handleSubmit, heading } = props

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='m-2'>
                    <Form.Label>Skill: </Form.Label>
                    <Form.Select
                        aria-label="Skill"
                        name="name"
                        defaultValue={skill.name}
                        onChange={handleChange}
                    >
                        <option>Choose A Skill</option>
                        <option value="Acrobatics">Acrobatics</option>
                        <option value="Arcana">Arcana</option>
                        <option value="Athletics">Athletics</option>
                        <option value="Crafting">Crafting</option>
                        <option value="Deception">Deception</option>
                        <option value="Diplomacy">Diplomacy</option>
                        <option value="Intimidation">Intimidation</option>
                        <option value="Lore">Lore</option>
                        <option value="Medicine">Medicine</option>
                        <option value="Nature">Nature</option>
                        <option value="Occultism">Occultism</option>
                        <option value="Performance">Performance</option>
                        <option value="Religion">Religion</option>
                        <option value="Society">Society</option>
                        <option value="Stealth">Stealth</option>
                        <option value="Survival">Survival</option>
                        <option value="Thievery">Thievery</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Insight">Insight</option>
                        <option value="Perception">Perception</option>
                        <option value="Linguistics">Linguistics</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className='m-2'>
                    <Form.Label>Level: </Form.Label>
                    <Form.Select
                        aria-label="level"
                        name="level"
                        defaultValue={skill.level}
                        onChange={handleChange}
                    >
                        <option>Skill Level</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className='m-2'>
                    <Form.Label>Description: </Form.Label>
                    <Form.Control 
                        placeholder="Description"
                        id="description"
                        name="description"
                        value={ skill.description }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button className="m-2" type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default SkillForm 