# js-work-day-scheduler

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.




WHEN I open the planner
THEN the current day is displayed at the top of the calendar

  --DONE --The current day is to be displayed in #currentDay.
           -- Date is to be formatted as "Thursday, September 16th" using moment .js










WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
 

    --Create dayplanner type time block with sections for hours from  9-5   using  bootstrap or jquery (?).





WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future

    --?? -connect each hour-block to current time?, 
        --when that time occurs -the correct block will change from green to the color red. 
           --When that hour is over - that block will change to grey.  
             --Future hour blocks of time will show green until that hour that hour occurs. 
                --And past hours will be grey.



WHEN I click into a timeblock
THEN I can enter an event

   -- When a user clicks any time block - the user can type info into   that block.


WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage

 -- At the end of row of time block - there will be a block to click 
   -- Clicked block will save day, time, and event typed into local storage


WHEN I refresh the page
THEN the saved events persist
```
   -- If page refreshed. The saved events will be still be stored on work day schedular.





### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:

  * Uses a date utility library to work with date and time