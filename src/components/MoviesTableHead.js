import React from "react";

const MoviesTableHead = props => {
	const {
		sortDirection,
		sortCategoryIndex,
		movieTableHeadingsList,
		handleSort
	} = props;
	return (
		<thead>
			<tr>
				{movieTableHeadingsList.map((heading, index) => {
					return (
						<th
							key={index}
							style={{ cursor: "pointer" }}
							onClick={() => handleSort(index)}>
							<span>
								{heading}{" "}
								{sortCategoryIndex === index ? (
									<i
										className={
											sortDirection
												? "fa fa-angle-double-up"
												: "fa fa-angle-double-down"
										}
									/>
								) : (
									""
								)}
							</span>
						</th>
					);
				})}
				<th />
				<th />
			</tr>
		</thead>
	);
};

export default MoviesTableHead;
