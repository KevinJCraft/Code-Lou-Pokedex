import React, { useState } from "react";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import LoadingOverlay from "react-loading-overlay";

const App = () => {
	const [isActive, setIsActive] = useState(false);

	const handleTogglLoading = bool => {
		setIsActive(bool);
	};

	return (
		<LoadingOverlay active={isActive} spinner text="Gotta catch'em all!">
			<div className="App">
				<Header />
				<MainContent toggleLoading={handleTogglLoading} />
			</div>
		</LoadingOverlay>
	);
};

export default App;
