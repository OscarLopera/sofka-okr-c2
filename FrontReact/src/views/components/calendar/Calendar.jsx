import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list';

const Calendar = ({events}) => {

    const listEventsCalendar = () => {
        if (events) {
            return events.map((event) => {
                return {
                    title: event.summary,
                    start: event.start.dateTime,
                    end: event.end.dateTime
                }
            });
        }
    }
    return (
        <div className="row">
                <div className="col-md-12">
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
                        themeSystem={'bootstrap'}
                        headerToolbar={{
                            left: 'today prev',
                            center: 'title',
                            right: 'next dayGridMonth,timeGridWeek,timeGridDay,listMonth',
                        }}
                        contentHeight={600}
                        initialView="dayGridMonth"
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        events={listEventsCalendar()}
                    />
                </div>
            </div>
    )
}

export default Calendar; 