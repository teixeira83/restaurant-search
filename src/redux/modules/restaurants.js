export const Types = {
    SET_RESTAURANT: 'restaurants/SET_RESTAURANT',
    SET_RESTAURANTS: 'restaurants/SET_RESTAURANTS',
}

const initialState = {
    restaurants: [],
    restauranSelected: null,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Types.SET_RESTAURANT:
            return { ...state, restaurant: action.payload};
        case Types.SET_RESTAURANTS:
            return { ...state, restaurants: action.payload};
            break;
        default:
            return state;
    }
};

export function setRestaurants(restaurants) {
    return {
        type: Types.SET_RESTAURANTS,
        payload: restaurants,
    };
};

export function setRestaurant(restaurant) {
    return {
        type: Types.SET_RESTAURANT,
        payload: restaurant,
    };
};
