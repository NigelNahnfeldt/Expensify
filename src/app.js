import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from "./store/configureStore";
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import { addExpense } from './actions/expenses';
import getVisibleExpense from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas Bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500}));

const state = store.getState();
const visibleExpenses = getVisibleExpense(state.expenses, state.filters);


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"));