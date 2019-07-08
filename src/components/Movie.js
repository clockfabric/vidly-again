import React from "react";
import Like from "./Like";

const Movie = props => {
	const {
		id,
		title,
		genre,
		numMovieInGenre,
		stock,
		rate,
		deleteMovie,
		handleLike,
		liked
	} = props;
	return (
		<tr>
			<td>
				<a href={`/movies/${id}`}>{title}</a>
			</td>
			<td>{genre.name}</td>
			<td>{stock}</td>
			<td>{rate}</td>
			<td>
				<Like liked={liked} handleLike={handleLike} id={id} />
			</td>
			<td>
				<button
					className='btn btn-outline-danger btn-sm'
					onClick={() => deleteMovie(id, numMovieInGenre)}>
					Delete
				</button>
			</td>
		</tr>
	);
};

export default Movie;
