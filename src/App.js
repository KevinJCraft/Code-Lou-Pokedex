import React from 'react';
import Header from './Components/Header';
import MainContent from './Components/MainContent';

class App extends React.Component {


    render() {
        return (
            <div className="App" >
                <Header />
                <MainContent />
            </div>
        );
    }
}

export default App
