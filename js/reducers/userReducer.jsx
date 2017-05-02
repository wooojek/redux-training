const userReducer = (state={name: "Will", town: "New York"}, action) => {
    switch (action.type) {
        case 'CHANGE_NAME': {
            state = {...state, name: action.payload};
            break;
        }

        case 'CHANGE_TOWN': {
            state = {...state, town: action.payload};
            break;
        }
    }

    return state;
}

export default userReducer;