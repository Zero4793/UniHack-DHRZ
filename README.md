# UniHack-Pay The Syntax

#TODO
1. a website - started
2. Questions and answering stuff (dan)
2. a likert style selection button
3. save the data to a database
4. visualise it on the website


##Further comments / pondering. Change/delete me at will

###index.html
All stuff is on index.html for now
Do we want 3 pages?
    - intro page
    - survey page
    - results page

There is no validation, styling or anything else. Select every radio button and submit to see 
what the JSON might look like. The format of the questionnaire needs to be prototyped or finished
soon. It's easy to change the question list until submission if question format and attributes
in the results stay the same.

###Read/write to a database
We need a database and a backend program to access a database when it receives an http request
Please go your own way, this is just idle thoughts
    if a POST request, and valid (unused?) id string, answers are all complete and valid (in JSON)
        "process" the answers, calculate attributes, save attributes to database and discard answers
        There's no need to calculate for real yet, would be nice to have dummy values for the attributes
    if a GET request, and valid (already in table) id string
        read attributes from database
        send them back in JSON

Get it working first, then later worry about return codes (2xx, 3xx, 4xx, 5xx)
We can add authentication to the API later if we have time.
Changed or missing params can cause problems, but it's easy to add later (redundant params are ignored)

###Displaying results
Brainstorming and ideas wanted for displaying psychological insights. Sketches?

Defaulting to some variation of a bar chart indicating percentages of attributes.