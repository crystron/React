import axios from "axios";

export const fetchAll = () => {
    return (dispatch) => {
        axios.get("http://localhost:8080/getAllAcc")
        .then(respone => {
            dispatch(actFetchAll(respone.data));
        })
    }
}

export const actFetchAll = (array) => ({
    type: 'FETCH_ALL',
    array
})

export const addAccount = item => dispatch => {
    axios.post("http://localhost:8080/saveAcc", item)
    .then(respone => {
        dispatch(actAddAccount(respone.data));
    })
}

export const actAddAccount = (item) => ({
    type: 'ADD_ACC',
    item
});

export const login = item => dispatch => {
    axios.post("http://localhost:8080/api/auth/login", item)
    .then(respone => {
        console.log(respone.data)
        dispatch(actLogin(item));
    })
}

export const actLogin = (item) => ({
    type: 'LOGIN',
    item
})
