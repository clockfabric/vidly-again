import React from "react";

const GenreList = props => {
	const { genreList, currentGenre, handleGenreSelection } = props;

	return (
		<ul className='list-group mt-5'>
			{genreList.map(genre => {
				return (
					<li
						key={genre._id}
						style={{ cursor: "pointer" }}
						className={
							currentGenre === genre.name
								? "list-group-item active"
								: "list-group-item"
						}
						onClick={() => handleGenreSelection(genre.name)}>
						{genre.name}
					</li>
				);
			})}
		</ul>
	);
};

export default GenreList;
