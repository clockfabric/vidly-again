import React from "react";

const SearchMovie = props => {
	return (
		<input
			className='mb-4 w-100'
			value={props.searchField}
			type='text'
			placeholder='Search...'
			onChange={e => props.handleFilterChange(e)}
		/>
	);
};

export default SearchMovie;
