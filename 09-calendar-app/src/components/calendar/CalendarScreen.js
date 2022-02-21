import React from "react";
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import { Navbar } from "../ui/Navbar";

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messages } from "../../helpers/calendar-messages-es";

import 'moment/locale/es';
import { CalendarEvent } from "./CalendarEvent";
import { useState } from "react";
import { CalendarModal } from "./CalendarModal";
import { useDispatch } from "react-redux";
import { uiOpenModal } from "../../actions/ui";

moment.locale('es');

const localizer = momentLocalizer(moment);
const events = [
    {title: 'titulo', 
    start: moment().toDate(), 
    end: moment().add(2,'hours').toDate(), 
    bgcolor:'#fafafa',
    user: {
        _id: '123',
        name: 'Juan'
    }}
];

export const CalendarScreen = () => {
    const dispatch = useDispatch();

    const onDoubleClick = (e) => {
        console.log('onDobleClick: ', e);
        dispatch(uiOpenModal());

    }

    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e)
    }

    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: '#367CF7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        };

        return {
            style
        }
    };

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    return (
        <div className="calendar-screen">
            <Navbar/>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                eventPropGetter={eventStyleGetter}
                onView={onViewChange}
                onDoubleClickEvent={onDoubleClick}
                view={lastView}
                components={{event: CalendarEvent}}
                />
                
            <CalendarModal/>
        </div>
    );
}
