import {createSelector} from 'reselect';


const getCurrentRecipeSet = (state) => {
    return state.recipes;
}

const getCurrentRange = (state) => {
    return state.range;
}

export const recipeSet = createSelector(
    [getCurrentRecipeSet, getCurrentRange],
    (wholeRecipeSet, currentRange) => {
        return wholeRecipeSet.slice(currentRange.start, currentRange.end);
    }
)
