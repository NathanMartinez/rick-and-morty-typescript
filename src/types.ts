export type characterType = {
	id: number //	The id of the character.
	name: string //	The name of the character.
	status: string //	The status of the character ('Alive', 'Dead' or 'unknown').
	species: string //	The species of the character.
	type: string //	The type or subspecies of the character.
	gender: string //	The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').
	origin: locationType[] //	Name and link to the character's origin location.
	location: locationType[] //	Name and link to the character's last known location endpoint.
	image: string // (url)	Link to the character's image. All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
	episode: episodeType[] // (urls)	List of episodes in which this character appeared.
	url: string // (url)	Link to the character's own URL endpoint.
	created: string //	Time at which the character was created in the database.
}
export type characterFilterType = {
	name: string // filter by the given name.
	status: string // filter by the given status (alive, dead or unknown).
	species: string // filter by the given species.
	type: string // filter by the given type.
	gender: string // filter by the given gender (female, male, genderless or unknown).
}

export type locationType = {
	id: number // The id of the location.
	name: string //	The name of the location.
	type: string // The type of the location.
	dimension: string //The dimension in which the location is located.
	residents: characterType[] // (urls)	List of character who have been last seen in the location.
	url: string // (url)	Link to the location's own endpoint.
	created: string // Time at which the location was created in the database.
}

export type episodeType = {
	id: number //	The id of the episode.
	name: string //	The name of the episode.
	air_date: string //	The air date of the episode.
	episode: string //	The code of the episode.
	characters: characterType[] // (urls)	List of characters who have been seen in the episode.
	url: string // (url)	Link to the episode's own endpoint.
	created: string //	Time at which the episode was created in the database.
}
