# twitter-feed

## Requirements

The Twitter Feed application will function as follows:
- Shall display a table of data points involving Twitter Feed messages
- Shall include a graphical display that shows the feed data in chart/graph form
- Shall include a form to enter a new data point into the application (including event date/time, source, content, topic, number of followers, and number of following), with the new data being updated appropriately throughout the UI
- Shall include a form to edit existing data points, with the new data being updated appropriately throughout the UI
- Shall include a form to delete existing data points, with the new data being updated appropriately throughout the UI
- Shall be able to sort the data in the table by different features
- Shall be able to filter the data in the table by different features

## Design
I decided to use a React/JSX framework (using a Vite project template) for the Twitter Feed application, with an underlying DOM skeleton in HTML and styling in CSS. I also used React state hooks to keep track of data and update the UI dynamically when it changes (along with some effect hooks for non-rendering changes). I mainly used regular HTML elements for the underlying UI framework, but I also used some components from the Material UI library. I split the UI into two tabs, one for the tabular view and one for the graph view, each forming a child component. The tabular view contains a list of data entries (made using JavaScript objects) for each of the Twitter messages (along with buttons for deleting or editing them), with additional features at the top of the table including an add new message button, filtering menus, and sorting menus. The tabular view also contains three child components in the form of modals, one each for adding, editing, and deleting entries. The graph view includes a couple of simple charts I made using the recharts library: a bar chart counting messages of each topic and another bar chart comparing numbers of followers and following for each message's user. 

I wasn't entirely sure if the tabular view should be a list the Twitter messages or an actual grid in which each row contained the data for a single message, so in the end I just went with a list to make it similar to an actual Twitter feed. I was also a bit confused about whether number of followers/following should be applied to a user or a message, so in the end I decided to just apply it to each message (one side effect of this is that the followers vs following chart can reuse the same user in the x-axis). I assumed that error checking would be a secondary concern compared with getting the basic functionality working, so I mostly skipped it (meaning you can currently enter empty strings or negative numbers in the modals, etc.). The same goes for documenting the code with comments, for testing the code, and for making the styling prettier. For the charts, I was running low on time, so I decided to just make a couple of simple examples in order to demonstrate some potential metrics for the data, rather than try to cover an exhaustive list of metrics the user might want. For my dates/times, I just used Zulu time.

## Time Estimate
I estimated that coding the application would take 3 hours for the basic functionality (with some AI assistance), with 2 more hours for extras (commenting, testing, error checking, styling, etc).

The basic functionality took over 3 hours to code (though not much, so I decided to just finish it off). I think the extras I mentioned may take somewhat longer than I anticipated, as they may require some finer tuning and there may be additional cleanup and debugging that come with them (plus deciding whether or not to use AI on them could be a factor). There are also additional upgrades that could be made to the application such as additional charts, new data features, and more.
