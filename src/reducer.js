import {
    ADD_RECIPE_PARAM,
    DELETE_RECIPE_PARAM,
    SET_RECIPES,
    HANDLE_FILTER_CHECK,
    HANDLE_FILTER_VISIBILITY,
    TOGGLE_RECIPE_HOVER,
    UPDATE_RESULT_RANGE
} from './actions';

let dietFilters = {
    visible: false,
    filters: [
            {name: "balanced", checked : false},
            {name: "high-protein", checked : false},
            {name: "low-carb", checked : false},
            {name: "low-fat", checked : false}
    ]
}

const initialState = {
    ingredients: [],
    recipes: [],
    dietFilters: dietFilters,
    range: {start: 0, end: 10}
};

const recipeAppReducer = (state = initialState, action) => {
    switch(action.type) {

        case ADD_RECIPE_PARAM:
        let newIngredients = state.ingredients.concat(action.text);
            return {
                ...state,
                ingredients: newIngredients
            };

        case DELETE_RECIPE_PARAM:
            let ingredients = state.ingredients.slice()
                .filter((item, i) => i !== action.index);
            return {
                ...state,
                ingredients: ingredients
            }

        case SET_RECIPES:
            return {
                ...state,
                recipes: action.data.hits.map((hit) => {
                    return {
                        isHover: false,
                        data: hit.recipe
                    }
                })
            }

        case TOGGLE_RECIPE_HOVER:
            let updatedRecipes = state.recipes.map((recipe) => {
                return {...recipe}
            });

            updatedRecipes[action.index].isHover = !updatedRecipes[action.index].isHover

            return {
                ...state,
                recipes: updatedRecipes
            }

        case HANDLE_FILTER_CHECK:
            let newFilterList = {
                ...state.dietFilters,
            };
            newFilterList.filters.filter(item => item.name !== action.filterName)
                .forEach(filter => filter.checked = false);

            let filterTochange = newFilterList.filters.find(filter => filter.name === action.filterName)
            
            filterTochange.checked = !filterTochange.checked;

            return {
                ...state,
                dietFilters: newFilterList
            }

        case HANDLE_FILTER_VISIBILITY:
            let dietFilters = {...state.dietFilters};
            dietFilters.visible = !dietFilters.visible;

            return {
                ...state,
                dietFilters: dietFilters
            }

        case UPDATE_RESULT_RANGE:
            return {
                ...state,
                range: {
                    ...state.range,
                    end: state.range.end + 10
                }
            }

        default:
            return state;
    }
};

export default recipeAppReducer;
