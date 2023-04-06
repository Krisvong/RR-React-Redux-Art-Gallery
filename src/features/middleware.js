// Define a logger middleware function that takes in the Redux store and returns a function that takes in the "next" middleware and returns a function that takes in the action being dispatched
export const logger = store => next => action => {
    // Check if the action is a function (i.e. a thunk)
    if (typeof action === 'function') {
        // If the action is a function, call it with the store's dispatch and getState functions as arguments
        action(store.dispatch, store.getState)
    } else { 
        // If the action is not a function, log the current state of the store before the action is dispatched
        console.log('dispatch', store.getState())
        // Call the next middleware in the chain with the action
        next(action)
        // Log the updated state of the store after the action is dispatched
        console.log('after dispatch', store.getState())
    }
}

// Original version of the logger middleware without handling thunks
// export const logger = store => next => action => {
//     console.log('dispatch', store.getState())
//     next(action)
//     console.log('after dispatch', store.getState())
// }
