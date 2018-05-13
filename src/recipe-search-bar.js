import React from 'react';

export default class RecipeSearchBar extends React.Component {

     render () {
         return (
            <div>
                <form name="test" autoComplete="off" onSubmit={(e) => {this.props.handleSubmit(e)}} >
                    <input id="new item" type="text" />
                    <input type="submit" />
                </form>
            </div>
         )
     }
}