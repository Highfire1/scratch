var calendarClass

// initialize the calendar
document.addEventListener('DOMContentLoaded', async function() {
    var calendarElement = document.getElementById('calendar');
    start_date = "2023-9-05"

    try {
      var FCalendar = new FullCalendar.Calendar(calendarElement, {
        schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
        rerenderDelay: 10,

        // calendar stuff
        timeZone: 'America/Vancouver',
        initialView: 'timeGridWeek', // 'resourceTimelineDay'

        initialDate: new Date(new Date(start_date).getTime() + 604800000), // start on the second week of courses

      })

      FCalendar.render();
    } catch (error) {
      alert(error)

    }
});
