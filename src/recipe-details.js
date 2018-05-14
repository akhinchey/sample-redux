import React from 'react';
import classNames from 'classnames';
import RecipeLabels from './recipe-labels';


export default class RecipeDetails extends React.Component {
    render () {
        const { recipe } = this.props;

        const classes = classNames({
            "recipe-details" : true,
        })

        const learnMoreButton = recipe.isHover
                                ? <button>Learn More</button>
                                : null;

        return (
            <div className={classes}>

                <h4 className="title">{recipe.data.label}</h4>

                <RecipeLabels labelText={"Diet"}
                              labels={recipe.data.dietLabels} />

                <RecipeLabels labelText={"Health"}
                              labels={recipe.data.healthLabels} />

                {learnMoreButton}
            </div>
        )
    }
}