import { createActions } from 'redux-actions';

export const { setUserLang } = createActions({
	// INCREMENT: (amount = 1) => ({ amount }),
	// DECREMENT: (amount = 1) => ({ amount: -amount }),
	SET_USER_LANG: lang => ({lang}),
});