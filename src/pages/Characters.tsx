import { useQuery, gql } from '@apollo/client'
import { characterType } from '../types'


const GET_CHARACTERS = gql`
	query getCharacters($page: Int = 2) {
		characters(page: $page) {
			info {
        count
				pages
				next
				prev
			}
			results {
				id
				name
				status
				species
				type
				gender
				origin {
					id
					name
				}
				location {
					id
					name
				}
				image
				created
			}
		}
	}
`
function DisplayCharacters({ page }: { page?: number }) {
	const { loading, error, data } = useQuery(GET_CHARACTERS, {
		variables: { page },
	})

	if (loading) return <p>Loading...</p>
	if (error) return <p>Something went wrong :(</p>

	return data.characters.results.map(
		({
			id,
			name,
			status,
			species,
			type,
			gender,
			image,
			created,
		}: characterType) => (
			<div key={id}>
				<img src={image} alt={`${name}`} />
				<h3>{name}</h3>
				<p>{status}</p>
				<p>{species}</p>
				<p>{type}</p>
				<p>{gender}</p>
				<p>{created}</p>
			</div>
		)
	)
}

function Characters() {
	return <DisplayCharacters />
}

export default Characters
