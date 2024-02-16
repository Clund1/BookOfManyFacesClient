import CharacterIndex from './characters/CharacterIndex'

const Home = (props) => {
	const { msgAlert } = props

	return (
		<>
		<h2>Welcome To The Book of Many Faces</h2>
		
		<CharacterIndex msgAlert={msgAlert} />
		</>
	)
}

export default Home
