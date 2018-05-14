import React from 'react';
import classNames from 'classnames';
import RecipeCard from './recipe-card';

export default class RecipeCollection extends React.Component {

    render () {
        const {recipes,
               toggleRecipeHover,
               updateResultRange} = this.props;

        if (!recipes.length) {
            return null;
        }

        const containerClasses = classNames({
            "recipe-container" : true,
        })

        return (
            <div className={containerClasses}>
                <h2>Recipe Results:</h2>
                {recipes.map((recipe, index) => {
                    return (
                        <RecipeCard key={index}
                                    index={index}
                                    toggleRecipeHover={toggleRecipeHover}
                                    recipe={recipe} />
                    )
                })}
                <div>
                    <button onClick={() => {updateResultRange()}}>Show More Recipes</button>
                </div>
                
            </div>
        )
    }
}
