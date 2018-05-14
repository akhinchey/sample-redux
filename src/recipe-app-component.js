import React from 'react';
import RecipeCollection from './recipe-collection';
import RecipeSearchIngredients from './recipe-search-ingredients';
import RecipeSearchButton from './recipe-search-button';
import RecipeSearchBar from './recipe-search-bar';
import RecipeFilter from './recipe-filter';


export default class RecipeAppComponent extends React.Component {
    render () {
        return (
            <div>
                <h1>Enter Your ingredients here:</h1>
                <div>
                <RecipeSearchIngredients ingredients={this.props.ingredients}
                                        deleteRecipeParam={this.props.deleteRecipeParam} />
                <br />
                <br />
                <RecipeSearchBar handleSubmit={this.props.handleSubmit}/>
                <br />
                <br />            
                <RecipeFilter dietFilters={this.props.dietFilters}
                            handleFilterVisibility={this.props.handleFilterVisibility}
                            handleFilterCheck={this.props.handleFilterCheck}/>
                <br />
                <br />
                <RecipeSearchButton getNewRecipes={this.props.getNewRecipes} />
                <br />
                <br />
                <RecipeCollection toggleRecipeHover={this.props.toggleRecipeHover}
                                  recipes={this.props.recipes}
                                  updateResultRange={this.props.updateResultRange}
                                  modalIsOpen={this.props.modalIsOpen}
                                  toggleModalStatus={this.props.toggleModalStatus} />
                </div>
            </div>
        )
    }
}