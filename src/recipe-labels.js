import React from 'react';


export default class RecipeLabels extends React.Component {
    render () {
        const { labelText, labels } = this.props;

        return (
            <div className="food-labels">
                <span>{labelText} Labels:</span>
                <ul>
                    {labels.map((label, key) => {
                        return (<li key={key}>{label}</li>)
                    })}
                </ul>
            </div>
        )
    }
}