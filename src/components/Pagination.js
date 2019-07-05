import React from "react";
import PropTypes from "prop-types";

const Pagination = props => {
	const {
		numberOfItems,
		itemsPerPage,
		currentPage,
		handlePageChanges
	} = props;

	const numberOfPages = Math.ceil(numberOfItems / itemsPerPage);
	if (numberOfPages <= 1) {
		return null;
	}
	const pages = [];
	for (let i = 1; i <= numberOfPages; i++) {
		pages.push(i);
	}

	return (
		<nav aria-label='Page navigation'>
			<ul className='pagination'>
				{pages.map(page => {
					return (
						<li
							key={page}
							style={{ cursor: "pointer" }}
							className={
								page === currentPage
									? "page-item active"
									: "page-item"
							}
							onClick={() => handlePageChanges(page)}>
							<span className='page-link'>{page}</span>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

Pagination.propTypes = {
	numberOfItems: PropTypes.number.isRequired,
	itemsPerPage: PropTypes.number.isRequired,
	currentPage: PropTypes.number.isRequired,
	handlePageChanges: PropTypes.func.isRequired
};

export default Pagination;
