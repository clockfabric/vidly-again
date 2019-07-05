import React from "react";
import Movie from "./Movie";

const MoviesTableBody = props => {
	const { pagedMovies, length, handleDeleteMovie, handleLike } = props;
	return (
		<tbody>
			{pagedMovies.map(movie => {
				return (
					<Movie
						key={movie._id}
						id={movie._id}
						title={movie.title}
						genre={movie.genre}
						numMovieInGenre={length}
						stock={movie.numberInStock}
						rate={movie.dailyRentalRate}
						liked={movie.liked}
						deleteMovie={handleDeleteMovie}
						handleLike={handleLike}
					/>
				);
			})}
		</tbody>
	);
};

export default MoviesTableBody;
