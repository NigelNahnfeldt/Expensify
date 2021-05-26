import moment from 'moment';
import filtersReducer from '../../reducers/filters';

// Testing default filter values set up
test('Should set up default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

// Testing set of sortBy to amount
test('Should set sort by to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

// Testing set of sortBy to date
test('Should set sort by to date', () => {
    const currentState = { text: '', startDate: undefined, endDate: undefined, sortBy: 'amount'};
    const action = { type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

// Testing set of text filter to text
test('Should set text filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'coffee'});
    expect(state.text).toBe('coffee');
});

// Testing set of filter startDate
test('Should set startDate filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: moment(0)});
    expect(state.startDate).toEqual(moment(0));
});

// Testing set of filter endDate
test('Should set endDate filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: moment(5000) });
    expect(state.endDate).toEqual(moment(5000));
});