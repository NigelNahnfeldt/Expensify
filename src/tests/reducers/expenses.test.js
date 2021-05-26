import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

// Tests the default set up
test('Should set up default expenses array', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual([ ]);
});

// Tests removing an expense by id
test('Should remove expense by id', () => {
    const action = { type: 'REMOVE_EXPENSE', id: expenses[1].id }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2] ]);
});

// Tests removing an expense if no id is found
test('Should not remove expenses if id not found', () => {
    const action = { type: 'REMOVE_EXPENSE', id: '-1' }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

// Tests adding an expense by id
test('Should add an expense', () => {
    const expenseToAdd = {
        description: 'New Expense',
        note: '',
        amount: 4000,
        createdAt: 0,
        id: '123'
    }
    const action = { type: 'ADD_EXPENSE', expense: expenseToAdd};
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expenseToAdd]);
});

// Tests editing an expense by id
test('Should edit an expense', () => {
    const action = { type: 'EDIT_EXPENSE', id: expenses[1].id , updates: { description: 'Updated description' }};
    const state = expensesReducer(expenses, action);
    expect(state[1].description).toBe('Updated description');
});

// Tests editing an expense if no id is found
test('Should not edit an expense if expense not found', () => {
    const action = { type: 'EDIT_EXPENSE', id: '-1' , updates: { description: 'Updated description' }};
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});