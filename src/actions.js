
export const ADD_RECIPE_PARAM = 'ADD_RECIPE_PARAM';
export const DELETE_RECIPE_PARAM = 'DELETE_RECIPE_PARAM';
export const SET_RECIPES = 'SET_RECIPES';
export const TOGGLE_RECIPE_HOVER = 'TOGGLE_RECIPE_HOVER';
export const HANDLE_FILTER_CHECK = 'HANDLE_FILTER_CHECK';
export const HANDLE_FILTER_VISIBILITY = 'HANDLE_FILTER_VISIBILITY';
export const UPDATE_RESULT_RANGE = 'UPDATE_RESULT_RANGE';
export const TOGGLE_MODAL_STATUS = 'TOGGLE_MODAL_STATUS';


 export const addRecipeParam = (text) => {
    return {
        type: ADD_RECIPE_PARAM,
        text: text
    }
}

export const deleteRecipeParam = (index) => {
    return {
        type: DELETE_RECIPE_PARAM,
        index: index
    }
}

export const setRecipes = (data) => {
    return {
        type: SET_RECIPES,
        data: data
    }
}

export const toggleRecipeHover = (index) => {
    return {
        type: TOGGLE_RECIPE_HOVER,
        index: index
    }
}

export const handleFilterCheck = (filterName) => {
    return {
        type: HANDLE_FILTER_CHECK,
        filterName: filterName
    }
}

export const handleFilterVisibility = () => {
    return {
        type: HANDLE_FILTER_VISIBILITY
    }
}

export const updateResultRange = () => {
    return {
        type: UPDATE_RESULT_RANGE
    }
}

export const toggleModalStatus = () => {
    return {
        type: TOGGLE_MODAL_STATUS
    }
}
