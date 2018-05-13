import React from 'react';
import './styles/index.css';
import $ from "jquery";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RecipeAppComponent from './recipe-app-component';
import { recipeSet } from './selectors';
import {setRecipes,
    toggleRecipeHover,
    addRecipeParam,
    deleteRecipeParam,
    handleFilterCheck,
    handleFilterVisibility,
    updateResultRange} from './actions';


export class RecipeAppContainer extends React.Component {

    getNewRecipes = () => {
        const apiKey = "d34b327b42ed51867cfbbab7c5195107";
        const appId = "8145629e";
        const params = this.props.ingredients.join(",");

        const filter = this.props.dietFilters.filters
                            .find(filter => filter.checked);
        let apiURL = "https://api.edamam.com/search?q="
                       + params + "&from=0&to=100&app_id=" + appId + "&app_key=" + apiKey;
        
        if (filter) {
            apiURL += ("&diet=" + filter.name);
        }

        console.log(apiURL);
        
        $.ajax({
            type: "GET",
            dataType: 'json',
            cache: false,
            url: apiURL,
            success: (data) => {
                alert('success');
                this.props.setRecipes(data);
            }
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let newItem = document.getElementById("new item").value;

        if (newItem.length) {
            this.props.addRecipeParam(newItem);
        }
        document.getElementById("new item").value = '';
    }

    render () {
        return (
            <RecipeAppComponent ingredients={this.props.ingredients}
                                deleteRecipeParam={this.props.deleteRecipeParam}
                                handleSubmit={this.handleSubmit}
                                dietFilters={this.props.dietFilters}
                                handleFilterVisibility={this.props.handleFilterVisibility}
                                handleFilterCheck={this.props.handleFilterCheck}
                                getNewRecipes={this.getNewRecipes}
                                toggleRecipeHover={this.props.toggleRecipeHover}
                                recipes={this.props.recipes}
                                updateResultRange={this.props.updateResultRange} />
        )    
    }
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.ingredients,
        recipes: recipeSet(state),
        dietFilters: state.dietFilters,
        range: state.range
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addRecipeParam: addRecipeParam,
        deleteRecipeParam: deleteRecipeParam,
        setRecipes: setRecipes,
        toggleRecipeHover: toggleRecipeHover,
        handleFilterCheck: handleFilterCheck,
        handleFilterVisibility: handleFilterVisibility,
        updateResultRange: updateResultRange
    }, dispatch)
}

const RecipeApp = connect(mapStateToProps, mapDispatchToProps)(RecipeAppContainer);
export default RecipeApp;
