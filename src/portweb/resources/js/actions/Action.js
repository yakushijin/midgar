export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_AGE = 'UPDATE_AGE';

export const updateName = name => {
    return {
        type: UPDATE_NAME,
        payload: name
    }
}

export const updateAge = age => {
    return {
        type: UPDATE_AGE,
        payload: age
    }
}