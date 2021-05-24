import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from "./store/configureStore";
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpense from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill'}));
store.dispatch(addExpense({ description: 'Gas Bill'}));
store.dispatch(setTextFilter('water'));

setTimeout(() => {
    store.dispatch(setTextFilter('rent'));
}, 3000)

const state = store.getState();
const visibleExpenses = getVisibleExpense(state.expenses, state.filters);
console.log(visibleExpenses);


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"));