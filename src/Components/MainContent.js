import React, { Component } from 'react';
import axios from 'axios'
import shortid from 'shortid';
import PokeList from './PokeList';
import Nav from './Nav'
import InfoCard from './InfoCard'
import SearchBar from './SearchBar';


class MainContent extends Component {

    state = {
        pokemonDetails: null,
        pokeList: [

        ]
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

    closeInfoCard = () => {
        this.setState({ pokemonDetails: null })
    }

    displayInfoCard = (url) => {
        axios.get(url)
            .then(response => {
                console.log(response.data)
                this.setState({
                    pokemonDetails: {
                        name: response.data.name,
                        abilities: response.data.abilities,
                        stats: response.data.stats,
                        img: response.data.sprites.front_default
                    }
                })

            })
            .catch(error => console.log(error))
    }

    searchPoke = (name) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
            .then(response => {
                console.log(response.data)
                this.setState({
                    pokemonDetails: {
                        name: response.data.name,
                        abilities: response.data.abilities,
                        stats: response.data.stats,
                        img: response.data.sprites.front_default
                    }
                })

            })
            .catch(error => console.log(error))
    }




    render() {



        return (
            <>
                <SearchBar searchPoke={this.searchPoke} />
                <div id="main-content">

                    {this.state.pokemonDetails

                        ? <InfoCard
                            closeInfoCard={this.closeInfoCard}
                            pokemonDetails={this.state.pokemonDetails}

                        />
                        : <>
                            <PokeList
                                pokeList={this.state.pokeList}
                                displayInfoCard={this.displayInfoCard}
                            />
                            <Nav
                                handleNextPage={() => this.getPokeList(this.state.nextPage)}
                                handlePreviousPage={() => this.getPokeList(this.state.prevPage)}

                            />
                        </>
                    }
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