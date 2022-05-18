# UFOs - JavaScript with CSS

## Project Overview

This project displays a table organizing UFO data stored as a JavaScript array and filters the data by multiple criteria creating a dynamic website. The table is created using JavaScript, customised with HTML/CSS and Bootstrap. The users can filter for multiple criteria at the same time. In addition to the date, table filters for the city, state, country, and shape are added.

## Results

The webpage includes five different filter search boxes on the left side of the page, which includes the Date, City, State, Country, and Shape. Filtering on the webpage can be done by entering the desired information into the filter search box. The results will return the UFOs sightings for the exact information entered in the filter search.For this purpose index.html was modified to include filters for the city, state, country and shape. "app.js" controls the event triggered for each of the changes made for input filter fields and results the required data for the site using d3.js.
- Brief functionality of app.js
 1. After each modification or change in the input fields an event is triggered, which calls the "updateFilters" function.<br>
  ![Code](https://github.com/ashwinihegde28/UFOs/blob/main/static/images/Code.PNG)   <br>
  
 2. The "updateFilters" function will call the "filterTable" function which filters data and rebuild the entire table with the desired information. <br>
    ![updateFilter](https://github.com/ashwinihegde28/UFOs/blob/main/static/images/updateFilter.PNG)   <br> 
    ![filterTable](https://github.com/ashwinihegde28/UFOs/blob/main/static/images/filterTable.PNG)   <br>
 
- Post Loading <br>
![Landing Page 1](https://github.com/ashwinihegde28/UFOs/blob/main/static/images/UFO_Sighting.PNG) 
![Landing Page 2](https://github.com/ashwinihegde28/UFOs/blob/main/static/images/OnLoadFilter.PNG) <br>

- After Applying Filter <br>
![Filtered Data](https://github.com/ashwinihegde28/UFOs/blob/main/static/images/post_filer.PNG) <br>





## Summary

### Drawback of the Webpage  
   Although the site is dynamic, it has its drawbacks.
  * The user must be trained to use the website. the user should know the correct information prior to entering else the spelling mistake, improper cases of Letters, spaces or any wrong entry with or without correct format will lead to incorrect search.
 
### Recommendation To Improve the Webpage
  * Creating a drop-down menu instead of input fields will solve most of the spelling, space issues.
  * The Date field should allow the selection of dates from the calendar instead of the input field. This provides the correct format of date.
  * Validation added to the form can be an added advantage.
