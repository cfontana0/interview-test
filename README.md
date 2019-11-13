## Stasher interview test


The test involves a sample project that aims to provide a simplified booking flow for the Stasher website.

The flow is as follows:
1. Search page - '/'
- search for a location (city, address, etc)
- add filters/constraints (optional)
- select a stashpoint
2. Checkout page - '/checkout'
- review booking data (stashpoint, cost, user details, etc)
- complete booking


### Main goal

The main goal of the test is to implement the checkout page and allow a user to successfully complete a booking.

At a minimum, the checkout page should enable users to login/register and view info about their booking. Use the existing code and patterns for inspiration and implement the necessary api calls, UI elements and logic. You can use any tools/libraries or approaches to complete the test and you can modify existing code/functionality.

A couple of things to keep in mind:
- you'll need a way to pass data from the search page to the checkout page
- you'll need to create a `.env` file in the root folder of the project and add a `GOOGLE_API_KEY` to it. You'll have to provide your own api key



### Secondary goal

The second part of the test is to improve the existing app. This can mean anything from making the code more robust and easier to scale, to making the app easier to use and better looking.

The existing code may be incomplete or even buggy. You are encouraged to fix the bugs/improve functionality as you see fit. Anything from code style improvements to refactoring whole parts of the app is fine and welcomed. If some of the improvements you want to make require refactoring the entire app, or copy pasting the same thing a bunch of times, just one relevant example is enough.

A few pointers:
- try to make the user experience as nice as possible. For example, provide users with info on the state of their actions/requests.
- plan contingencies for errors
- write code with future work in mind. consider that you may want to expand existing functionality, or change behaviours at some point.


### What we're looking for

The test is designed to test several things, these are the big things we're looking for:
- how do you approach a problem, understand requirements and implement solutions
- how well you understand existing code and how do you expand on it, keeping in mind that other devs would work on this in the future


### Code info

The project uses the next.js framework (which we also use for Stasher.com), so it may be helpful to read up on it a bit:
- https://nextjs.org/docs
- https://nextjs.org/docs#with-url-object-1
- https://nextjs.org/docs#fetching-data-and-component-lifecycle

All components are functional components and state management is done with React Hooks:
- https://reactjs.org/docs/hooks-overview.html

Styling is done with css modules:
- https://github.com/css-modules/css-modules

To get started, clone the repo locally. You should have `yarn` installed globally, though you can probably make it work with `nmp` as well, if you prefer. To run the sample code first do a `yarn` and wait for the packages to install. Then `yarn dev` to start.


### Get in touch

There may be some inadverted bugs as well, try to fix/get around them, but if anything is blocking you, get in touch. You shouldn't need to touch the api code to get the app working, but if you have any issues getting data from the api, again, get in touch. Same goes for any other questions you may have, we're happy to help out.

The test shouldn't take you more than a few hours to complete. Don't waste too much time trying to make it perfect, rather try to provide reasons for your choices and explain what other improvements you would have made if you had more time or in an ideal scenario. The live website stasher.com may be a good source of inspiration on both ux/flow and api calls/data. The data comes from staging.stasher.com, so you can register an account there if you think it will help.
