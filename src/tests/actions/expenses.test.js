import {addExpense, editExpense, removeExpense } from '../../actions/expenses';

/*
*   Test cases for removeExpense Action Generator
*/

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '123141abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123141abc'
    })
});

test('Should setup remove expense action object with default object (no id passed)', () => {
    const action = removeExpense();
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
    })
});

/*
*   Test cases for editExpense Action Generator
*/

test('Should set up edit expense action object', () => {
    const action = editExpense('123412', {description: "New Expense"});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123412',
        updates: {
            description: 'New Expense'
        }
    });
});

/*
*   Test cases for addExpense Action Generator
*/

test('Should setup add expense action object with provided values', () => {
    const expenseData = { description: 'Water bill', note: 'This bill sucks', amount: 150, createdAt: 1000}

    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('Should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: "",
            note: "",
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    })
});