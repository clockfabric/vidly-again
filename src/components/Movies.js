import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import GenreList from "./GenreList";
import MoviesTableHead from "./MoviesTableHead";
import MoviesTableBody from "./MoviesTableBody";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../Utils/paginate";
import { genreFilter } from "../Utils/genreFilter";
import { sorting } from "../Utils/sorting";
import { Link } from "react-router-dom";
import SearchMovie from "./SearchMovie";

const Movies = props => {
	const allMovies = getMovies();
	const itemsPerPage = 4;
	const [movies, setMovies] = useState(allMovies);
	const [currentPage, setCurrentPage] = useState(1);

	const [searchField, setSearchField] = useState("");

	let genreList = getGenres();
	genreList = [{ _id: 1, name: "All Genres" }, ...genreList];
	const [currentGenre, setCurrentGenre] = useState(genreList[0].name);

	let movieTableHeadingsList = ["Title", "Genre", "Stock", "Rate"];
	const movieTableSortCategory = [
		"title",
		"genre.name",
		"numberInStock",
		"dailyRentalRate"
	];

	const [sortDirection, setSortDirection] = useState(true);
	const [sortCategoryIndex, setSortCategoryIndex] = useState(0);

	useEffect(() => {
		handlePageChanges(currentPage);
	});

	const handleFilterChange = e => {
		const searchString = e.currentTarget.value;
		setSearchField(searchString);

		const newMovies = allMovies.filter(movie => {
			return movie.title
				.toLowerCase()
				.startsWith(searchString.toLowerCase());
		});
		setCurrentPage(1);
		setMovies(newMovies);
	};

	const handleDeleteMovie = (id, numMovieInGenre) => {
		const moviesWithout = movies.filter(movie => {
			return movie._id !== id;
		});
		if (
			currentPage > 1 &&
			numMovieInGenre - 1 === (currentPage - 1) * itemsPerPage
		) {
			setCurrentPage(currentPage - 1);
		}
		setMovies(moviesWithout);
	};

	const handleLike = id => {
		const moviesLiked = movies.map(movie => {
			if (movie._id === id) {
				movie.liked = !movie.liked;
			}
			return movie;
		});
		setMovies(moviesLiked);
	};

	const handlePageChanges = pageNum => {
		setCurrentPage(pageNum);
	};

	const handleGenreSelection = selectedGenre => {
		setCurrentGenre(selectedGenre);
		setCurrentPage(1);
	};

	const handleSort = headingIndex => {
		setSortCategoryIndex(headingIndex);
		setSortDirection(!sortDirection);
	};

	const renderHeadingMessage = () => {
		const genreFilteredMovies = genreFilter(movies, currentGenre);
		let length = genreFilteredMovies.length;
		const sortedMovieList = sorting(
			genreFilteredMovies,
			movieTableSortCategory[sortCategoryIndex],
			sortDirection
		);
		const pagedMovies = paginate(
			sortedMovieList,
			currentPage,
			itemsPerPage
		);
		if (!length) {
			return <h5>No movies in the database!</h5>;
		} else {
			return (
				<div>
					<h5>{`Showing ${length} movies in the database. (Category: ${currentGenre})`}</h5>
					<Link to='/movies/new' className='btn btn-primary mb-4'>
						New Movie
					</Link>
					<br />
					<table className='table table-striped'>
						<MoviesTableHead
							handleSort={handleSort}
							sortCategoryIndex={sortCategoryIndex}
							movieTableHeadingsList={movieTableHeadingsList}
							sortDirection={sortDirection}
						/>
						<MoviesTableBody
							pagedMovies={pagedMovies}
							length={length}
							handleDeleteMovie={handleDeleteMovie}
							handleLike={handleLike}
						/>
					</table>
					<Pagination
						numberOfItems={length}
						itemsPerPage={itemsPerPage}
						handlePageChanges={handlePageChanges}
						currentPage={currentPage}
					/>
				</div>
			);
		}
	};

	return (
		<React.Fragment>
			<div className='container mt-4'>
				<div className='row justify-content-md-center'>
					<div className='col col-sm-12 col-md-12 col-lg-3 mb-4'>
						<GenreList
							currentGenre={currentGenre}
							genreList={genreList}
							handleGenreSelection={handleGenreSelection}
						/>
					</div>
					<div className='col'>
						<SearchMovie
							searchField={searchField}
							handleFilterChange={handleFilterChange}
						/>
						{renderHeadingMessage()}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Movies;
