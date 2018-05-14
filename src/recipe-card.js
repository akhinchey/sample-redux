import React from 'react';
import classNames from 'classnames';
import RecipeDetails from './recipe-details';


export default class RecipeCard extends React.Component {

    handleToggle = (index) => {
        this.props.toggleRecipeHover(index);
    }

    render () {
        const {index, recipe} = this.props;

        const classes = classNames({
            "recipe-card" : true,
            "recipe-card--hover": recipe.isHover
        })

        return (
            <div className={classes} onMouseEnter={() => {this.handleToggle(index)}}
                             onMouseLeave={() => {this.handleToggle(index)}}>
                <div className="recipe-image">
                    <img alt="recipe pic" src={recipe.data.image} />
                </div>

                <RecipeDetails recipe={recipe} />
            </div>
        )
    }
}