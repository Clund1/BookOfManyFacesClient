import { Form, Button, Container } from 'react-bootstrap'

const CharacterForm = (props) => {
    const { character, handleChange, handleSubmit, heading } = props

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='m-2'>
                    <Form.Label>Name: </Form.Label>
                    <Form.Control 
                        placeholder="name"
                        id="name"
                        name="name"
                        value={ character.name }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className='m-2'>
                    <Form.Label>Class: </Form.Label>
                    <Form.Select 
                        aria-label="Class"
                        name="class"
                        defaultValue={ character.class }
                        onChange={handleChange}
                    >
                        <option>Choose Class</option>
                        <option value="Alchemist">Alchemist</option>
                        <option value="Artificer">Artificer</option>
                        <option value="Bard">Bard</option>
                        <option value="Champion">Champion</option>
                        <option value="Cleric">Cleric</option>
                        <option value="Fighter">Fighter</option>
                        <option value="Mechanist">Mechanist</option>
                        <option value="Monk">Monk</option>
                        <option value="Ranger">Ranger</option>
                        <option value="Rogue">Rogue</option>
                        <option value="Technomancer">Technomancer</option>
                        <option value="Wizard">Wizard</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className='m-2'>
                    <Form.Label>Race: </Form.Label>
                    <Form.Select 
                        aria-label="Race"
                        name="race"
                        defaultValue={ character.class }
                        onChange={handleChange}
                    >
                        <option>Choose Race</option>
                        <option value="Android">Android</option>
                        <option value="Dwarf">Dwarf</option>
                        <option value="Elf">Elf</option>
                        <option value="Gnome">Gnome</option>
                        <option value="Goblin">Goblin</option>
                        <option value="Halfling">Halfling</option>
                        <option value="Half-Elf">Half-Elf</option>
                        <option value="Human">Human</option>
                        <option value="Orc">Orc</option>
                        <option value="Vesk">Vesk</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className='m-2'>
                    <Form.Label>Level: </Form.Label>
                    <Form.Control 
                        type="number"
                        placeholder="What is your level?"
                        id="level"
                        name="level"
                        value={ character.level }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className='m-2'>
                    <Form.Label>Age: </Form.Label>
                    <Form.Control 
                        type="number"
                        placeholder="How old are you?"
                        id="age"
                        name="age"
                        value={ character.age }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button className="m-2" type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default CharacterForm 