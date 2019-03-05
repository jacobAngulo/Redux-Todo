export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'
export const DELETE_TODO = 'DELETE_TODO'

export const toggleCompleted = (id) => {
    return {
        type: TOGGLE_COMPLETED,
        payload: id
    }
}

export const deleteTodo = id => {
    return {
        type: DELETE_TODO,
        payload: id

    }
}