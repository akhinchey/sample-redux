import React from 'react';
import classNames from 'classnames';


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
                {recipe.data.label}
                <br />
                <img alt="recipe pic" src={recipe.data.image} />
                <br />
                <p>For full instructions: 
                    <a href={recipe.data.url} target="_blank">{recipe.data.source}</a>
                </p>
                <ul>
                    {recipe.data.ingredientLines.map((ingredient, key) => {
                        return (<li key={key}>{ingredient}</li>)
                    })}
                </ul>
            </div>
        )
    }
}