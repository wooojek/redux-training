const dataReducer = (state={data: 'LoL'}, action) => {
    switch (action.type) {
        case 'FETCH_DATA': {
            state = {...state, data: action.payload};
            break;
        }
        
        case 'E': {
            throw new Error("aaaaa!", action.payload);
        }
    }

    return state;
}

export default dataReducer;