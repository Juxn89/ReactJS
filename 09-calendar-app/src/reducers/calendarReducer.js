import moment from 'moment';

const initialState = {
    events: [],
    activeEvent: {title: 'titulo', 
    start: moment().toDate(), 
    end: moment().add(2,'hours').toDate(), 
    bgcolor:'#fafafa',
    user: {
        _id: '123',
        name: 'Juan'
    }}
}

export const calendarReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}
