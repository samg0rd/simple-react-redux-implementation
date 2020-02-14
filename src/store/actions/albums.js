import * as actionTypes from './actionTypes';

export const setAlbums = (albums) => {
    return {
        type: actionTypes.SET_ALBUMS,
        albums: albums
    }
}

export const fetchAlbums = () => {
    return dispatch => {

        fetch('https://jsonplaceholder.typicode.com/albums',{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(res => {
            // console.log('res -> ', res);
            dispatch(setAlbums(res));
        })
        .catch(err => console.log('❌ error! -> ', err))
    }    
}