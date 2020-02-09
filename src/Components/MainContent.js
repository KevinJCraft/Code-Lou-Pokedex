import React, { Component } from 'react';
import axios from 'axios'
import shortid from 'shortid';
import PokeList from './PokeList';
import InfoCard from './InfoCard'
import SearchBar from './SearchBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NotFound from './NotFound';


class MainContent extends Component {

    state = {
        pokeList: []
    }

    componentDidMount() {
        this.getPokeList(`https://pokeapi.co/api/v2/pokemon/?limit=12&offset=0`);
    }

    getPokeList(url) {
        axios.get(url)
            .then(response => {
                this.setState({
                    pokeList: response.data.results.map(pokemon => ({
                        name: pokemon.name,
                        url: pokemon.url,
                        key: shortid.generate()
                    })),
                    nextPage: response.data.next,
                    prevPage: response.data.previous
                })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <>
                <div id="main-content">
                    <Router>
                        <SearchBar />

                        <Switch>
                            <Route
                                path='/' exact
                                render={(props) => <PokeList {...props}
                                    pokeList={this.state.pokeList}
                                    handleNextPage={() => this.getPokeList(this.state.nextPage)}
                                    handlePreviousPage={() => this.getPokeList(this.state.prevPage)}
                                />}
                            />
                            <Route path='/pokemon/:pokemon' component={InfoCard} />
                            <Route path='/error/:message' component={NotFound} />
                        </Switch>
                    </Router>
                </div>
                <img
                    id="pikachu"
                    className="hvr-hang"
                    src="https://raw.githubusercontent.com/CodeLouisville/FSJS-Weekly-Challenges/master/Challenges/Week5/images/pikachu.png"
                    alt="Pikachu"
                />
            </>
        )
    }
}

export default MainContent;