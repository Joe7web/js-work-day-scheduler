# js-work-day-scheduler

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.




WHEN I open the planner
THEN the current day is displayed at the top of the calendar

  //DONE //The current day is to be displayed under  formatted as Thursday, September 16th using moment .js





WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
//create dayplanner type time block with sections for hours from  9-5.










WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future


WHEN I click into a timeblock
THEN I can enter an event

WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage

WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

![A user clicks on slots on the color-coded calendar and edits the events.](./Assets/05-third-party-apis-homework-demo.gif)


## Grading Requirements

This homework is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:

  * Uses a date utility library to work with date and time