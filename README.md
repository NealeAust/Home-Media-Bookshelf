# Home-Media-Bookshelf

[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Project Summary

To build an MERN full-stack media library application designed to allow the user to join a media library containing movies, TV shows and music in multiple hardcopy formats that are managed across the serive. 

## MERN Full-Stack

A MERN full-stack consists of a backend, frontend and datase using four key technologies MongoDB, Express(.js), React(js) and Node(js). Programming languages Javascript and JSONare used all the way through..

![image](https://github.com/NealeAust/Home-Media-Bookshelf/assets/115671306/ccf6ade1-4ecc-4687-bd7a-6b466b71eec1)

 |        MERN  Key Technologies           |                                      Description                                                                             |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
|React.js front end       |  The top tier of the MERN stack used for creating client-side applications in HTML. React lets the developer build up complex interfaces through simple components, then connect them to data on the back-end server, and render them as HTML                                |
Express.js & Node.js server tier | The back end comprising of an Express.js server side framework, running inside a Node.js server. This tier acts as the engine room with Express.js accepting GETs or Posts from React and in turn using MongoDB Node.js drivers to access and update data in MongoDB.|         |
MongoDB database tier             | Accepts JSON documents created in the React.js front end that have been processed by the Express.js server.                                                                                  |

## Packages Used

The packages used in this project include but is not limited to the packages described in the table below.

|          Package               |                                      Description                                                                             |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| Express.js                     |A Node.js web application framework providing broad features to build a web & mobile application.                               |
|MongoDb Compass         | A graphical user interface (GUI) for querying, aggregating and analysing MongoDB data in a visual environment.
|Mongoose               | Acts as a front end to MongoDB, a NoSQL database that performs the role of a local library using a document-oriented data model.
|Node.js                        |Executes JavaScript code outside a web browser.
|GraphQL| A query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more.
Apollo Client| A comprehensive state management library for Javascript that helps developers structure code to using GraphQL
Babel                  |An npm JavaScript compiler that reads your JavaScript and converts into other JavaScript. Basically makes your new JavaScript suitable for older browsers.
|

## Home Media Library Webpage

The Home Media Bookshelf is an application designed to allow the user to join a media library containing movies, TV shows and music in multiple hardcopy formats that are managed across the service. Ultimately the purpose is for users to be able to borrow items without cost.

It provides a header and footer which remain constant and has been purposedly designed to be effortless to use and aesthetically pleasing. 

The Header contains a Navigation Bar with the following direct links:

 |         Page Link               |                                      Description                                                                             |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
|Home:                      |This is the default window. Contains an image of the media libray and who it was created by and a summary description of the application and its ultimate. purpose                                      |
Library:                    | Displays a list of all media items recorded on the Mongo database.
Add| Allows the user to add a media item (create a record)  directly onto the Mongo database.
Update| Allows the user to update details of a media item stored on the Mongo database.
Delete| Allows the user to delete a record directly from the database.
Message      | Displays a form with the fields *name*, *email* and *message*. Plus, a **submit** button to enable the enquiring person to contact me.                                                                                   |
|Login   | Enables members to login to the database in a secure environment.
|Signup  |  Enables users to signup as a member. 

The Footer contains a notation of the month the application was and a link to it's corresponding Github repository.

## Project Description

The Home Media Library Webpage has been created as the final project of the coding bootcamp to increase my visibility and highlight my up-to-date skills, talents and experience to future employers. It is MERN full-stack application with a front-end and back-end that interface with each other to store and retrieve data from a Mongo Database.

**Note:** A description of how to use the completed web page appears in the 'Usage' section below.

The steps taken to build this webpage included but were not limited to the following:

- Initiated project by installing **npx create-react-app**, which created almost the whole file structure.

- Created the necessary component files: **Header.js**, **Footer.js**, **AboutMe.js**, **Portfolio.js**, **ContactMe.js**, & **Resume.js**.
s2
- Created an images folder to store images, that were imported as required.

- Within the **Header.js** component, coded the necessary *(onClick) links* to *AboutMe*, *Portfolio*, *ContactMe* & *Resume* pages.

- Within the **App.js** component, coded the *renderPage function* to establish, navigate to and display the selected page.

- Within the **AboutMe.js** component, added an image of myself and wrote a short biography. Whilst ensuring the Header & Footer are always displayed.

- Within the **Portfolio.js** component, added an image of the homepage and links to deployed application and Github repository of six web applications I developed. 

- Within the **ContactMe.js** component, coded a contact form with three fields *Name*, *Email* and *Message*. Included handleChange & handleSumit functions to handle input & submitting form.
   -  A folder named **utils** containing a **helper.js** file was created with a function that contained a regular expression to validate the email address entered. 
   Pattern: /^([a-z0-9_ \ .-]+)@([\da-z \ .-]+).([a-z \ .]{2,6})$/

- Within the **Resume.js** coded a link to download a PDF file of my resume. Also used props to display a list of my proficiencies. 

## Installation

N/A

## Usage

The Home Media Bookshelf webpage is a fully functional web application. 

When first opened the application defaults to the Home page window, between the constant Header and Footer sections.

To navigate throughout the application the user hovers the cursor over the chosen link **AboutMe**, **Portfolio**, **ContactMe**, or **Resume.** and upon click the window will open.

The user can also click on the **Github NealeAust** at the bottom right-hand corner of the webpage to navigate to my Github webpage.


## Deployed Application and Screenshot

Link to deployed application:

https://nealeaust.github.io/React-Portfolio-V1/

Screenshot:

![image](https://github.com/NealeAust/Home-Media-Bookshelf/assets/115671306/0e2ab5fa-fc08-4aa4-8158-f99df474def4)

## Credits

N/A

## Licence

MIT

