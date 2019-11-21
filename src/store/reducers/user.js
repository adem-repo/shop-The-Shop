import { handleActions } from 'redux-actions';
import { setUserLang } from './../actions/user/actions';

const initialState = {
	lang: null
};

const reducer = handleActions({
		[setUserLang]: (state, { payload: { lang } }) => {
			return {...state, lang }
		},
	},
	initialState
);

export default reducer;