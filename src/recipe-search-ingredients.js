import React from 'react';

export default class RecipeSeachIngredients extends React.Component {
    render () {
        const ingredients = this.props.ingredients;

        if (!ingredients.length) {
            return null;
        }

        return (
            <div>
                {
                    ingredients.map((item, index) => {
                        let deleteButton = (<button onClick={() => {this.props.deleteRecipeParam(index)}}>Delete</button>);
                        return <div key={index}>{item}<span> {deleteButton}</span></div>
                    })
                }
            </div>

        )
    }
}