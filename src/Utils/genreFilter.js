export function genreFilter(items, genre) {
	if (genre === "All Genres") return items;
	return items.filter(item => {
		return item.genre.name === genre;
	});
}
