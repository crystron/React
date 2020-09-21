const initState = [];
const account = (state = initState, action) => {
    switch (action.type){
        case 'FETCH_ALL': {
            state = action.array
            return [...state]
        }
        case 'ADD_ACC':
            state.push(action.item);
            return [...state];
        case 'DELETE_ACC':
            return state;
        case 'UPDATE_ACC':
            return state;
        case 'LOGIN':
            console.log(action.item);
        default:
            return [...state]
    }
}

export default account;