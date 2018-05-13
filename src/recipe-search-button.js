import React from 'react';

export default class RecipeSearchButton extends React.Component {

    render () {
         return (
            <button onClick={() => {this.props.getNewRecipes()}}>Search for Recipes</button>
         )
    }
}