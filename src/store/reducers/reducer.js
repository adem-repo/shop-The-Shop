import { handleActions } from 'redux-actions';
import { increment, decrement } from '../actions';

const initialState = {
    counter: 1
};

const reducer = handleActions({
        [increment]: (state, { payload: { amount } }) => {
            return {...state, counter: state.counter + amount}
        },
        [decrement]: (state, { payload: { amount } }) => {
            return {...state, counter: state.counter + amount}
        }
    },
    initialState
);

export default reducer;