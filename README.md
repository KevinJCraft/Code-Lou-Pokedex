# Pokedex Challenge

In this challenge you will use the Pokemon API (https://pokeapi.co/), the pokeapi-js-wrapper (https://github.com/PokeAPI/pokeapi-js-wrapper), and React via a Create-React-App to:

1. display a list of 12 Pokemon at a time
2. page through the list of pokemon
3. show the details of one selected pokemon.

### Instructions

Fork this project by clicking the Fork button in the top right to make your own copy.

## Week 5

In the src/index.js file - Write a function that will use the already initialized PokeClient to fetch a list of the first 12 pokemon. Replace the hard coded list of 3 pokemon and show the list of 12 pokemon on the initial page load.

Create a previous() function and a next() function that will show the next 12 or previous 12 pokemon from the Pokemon API.

Pass these functions to the onClick event handlers for the appropriate Previous and Next buttons.

## Week 6

Write a function that fetches details about a specific pokemon.

Create a new card to display the specific pokemon details.

When a user clicks one of the pokemon cards in the list:
*Hide the list
*Display details about the pokemon name that was clicked. You only need to show a few details of your choice.

Lastly, provide a way to go back to the list.
