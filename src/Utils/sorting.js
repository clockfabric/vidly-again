import _ from "lodash";

export function sorting(items, category, direction) {
	if (direction) {
		return _.orderBy(items, category, "asc");
	} else {
		return _.orderBy(items, category, "desc");
	}
}
