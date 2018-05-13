import React from 'react';

export default class RecipeFilter extends React.Component {

    displayFilterItems () {
        if (!this.props.dietFilters.visible) {
            return;
        }

       return (
        <ul>
            {this.props.dietFilters.filters.map((filter, i) => {
                 return (
                     <li key={i}>
                         {filter.name}
                         <input type="checkbox"
                             onChange={() => {this.props.handleFilterCheck(filter.name)}} 
                             checked={filter.checked}/>
                     </li>
                 )
             })}
        </ul>
       )
    }

    getFilterName (checkedFilter) {
        return checkedFilter ?
            "You have currently selected: " + checkedFilter.name : null;
    }



    render () {

        const currentFilter = this.props.dietFilters.filters
            .find(filter => filter.checked);

        const buttonText = !this.props.dietFilters.visible ?
            "Show" : "Hide";
        return (
            <div>
                <button onClick={() =>{this.props.handleFilterVisibility()}}>{buttonText} Additional Filters</button>
                {this.displayFilterItems()}
                <div>{this.getFilterName(currentFilter)}</div>
            </div>
        )
    }
}
