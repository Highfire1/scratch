// initialize the calendar
document.addEventListener('DOMContentLoaded', async function() {
    
    date = "2023-9-05"
    initial_date = new Date(new Date(date).getTime() + 604800000)

    try {
      var calendarElement = document.getElementById('calendar');

      var FCalendar = new FullCalendar.Calendar(calendarElement, {
        schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',

        // calendar stuff
        initialDate: initial_date, // start on the second week of courses
      })

      FCalendar.render();

    } catch (error) {
      alert(error)
    }
});