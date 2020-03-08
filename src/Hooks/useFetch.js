import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";

const useFetch = url => {
	const [value, setValue] = useState();
	const history = useHistory();
	axios
		.get(url)
		.then(response => {
			setValue(response);
		})
		.catch(error => history.push(`/error/${error.message}`));

	return value;
};

export default useFetch;
