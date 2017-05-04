const ageReducer = (state={age: 44,}, action) => {
    switch(action.type) {
        case 'INC': {
            let newAge = state.age;
            newAge++;
            state = {...state, age: newAge,};
            break;
        }
        case 'DEC': {
            let newAge = state.age;
            newAge--;
            state = {...state, age: newAge,};
            break;
        }
    }

    return state;
}

export default ageReducer;