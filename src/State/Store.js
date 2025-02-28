import { combineReducers, applyMiddleware, legacy_createStore }  from ('redux');

const rootReducer = combineReducers({ auth:authReducer, 
    coin: coinReducer,
    wallet: walletReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

