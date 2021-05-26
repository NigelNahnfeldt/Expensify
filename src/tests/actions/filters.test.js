import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters';
import moment from 'moment';


/*
*   Test cases for setTextFilter Action Generator
*/

test('Should setup set text filter action object', () => {
    const action = setTextFilter('filteredSearchWord');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'filteredSearchWord'
    });
});

test('Should setup set text filter action object (with defaults)', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

/*
*   //Test cases for sortByAmount Action Generator
*/

test('Should set up sort by amount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
});

/*
*   Test cases for sortByDate Action Generator
*/

test('Should set up sort by date action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
});

/*
*   Test cases for setStartDate Action Generator
*/

test('Should setup set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});


/*
*   Test cases for setEndDate Action Generator
*/

test('Should setup set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});