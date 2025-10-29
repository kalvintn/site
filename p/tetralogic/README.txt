## PROJECT DETAILS

Project created by Kalvin Nguyen, Pursuant B.A. Computer Science @ UGA.
Last updated: Dec 10, 2023.



## USAGE

All materials are free for commercial/personal use, distribution, and reproduction.



## JSON ACCESS

Get difficulty          JSON_OBJ.medium              gets all questions of that difficulty
Get question set        JSON_OBJ.hard[num]           consider 0 <= num < difficulty.length
Get category name       JSON_OBJ.easy[num].name      name: the attribute that relates set members
Get answer items        JSON_OBJ.easy[num].items     items: comma-seperated list of answers



## METHODS

newGame()               initialize game
globalReset()           reset fields for new game/replayability
initializeKeys()        get random questions from JSON_OBJ
randomizeItems()        shuffle function for random display, selected on shuffle
handleClick()           click event management for each button
shuffle()               randomizeItems()
clearSelection()        functionality for 'deselect all button', also clear on new game
submit()                check submitted validity from selected[], button colors, win state, etc.
bang()                  decrement lives/determine loss state
endgame()               calculate endgame displays/functionality

