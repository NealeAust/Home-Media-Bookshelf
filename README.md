# Home-Media-Bookshelf

[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Project Summary

To build an MERN full-stack media library application designed to allow the user to join a media library containing movies, TV shows and music in multiple hardcopy formats that are managed across the service. 

## MERN Full-Stack

A MERN full stack consists of a backend, frontend and database that uses four key technologies MongoDB, Express.js, React.js and Node.js. Programming languages JavaScript and JSON are used all the way through.

![image](https://github.com/NealeAust/Home-Media-Bookshelf/assets/115671306/ccf6ade1-4ecc-4687-bd7a-6b466b71eec1)

 |        MERN Key Technologies           |                                      Description                                                                             |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
|React.js front-end       |  The top tier of the MERN stack used for creating client-side applications in HTML. React lets the developer build up complex interfaces through simple components, then connect them to data on the back-end server, and render them as HTML                                |
Express.js & Node.js server tier | The back end comprising of an Express.js server-side framework, running inside a Node.js server. This tier acts as the engine room with Express.js accepting GETs or Posts from React and in turn using MongoDB Node.js drivers to access and update data in MongoDB. |         |
MongoDB database tier             | Accepts JSON documents created in the React.js front end that have been processed by the Express.js server.                                                                                |

## Packages Used

The packages used in this project include but are not limited to those described in the table below.

|          Package               |                                      Description                                                                             |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
|React.js|In simple terms React is a library that lets a developer build user interface out of individual pieces called components. Then combine them into entire screens, pages and apps. *This project requires creating these components, which interface with other components and/or app.js to display features of my portfolio.
Express.js                     |A Node.js web application framework providing broad features to build a web & mobile application.                               |
|MongoDb Compass         | A graphical user interface (GUI) for querying, aggregating and analysing MongoDB data in a visual environment.
|Mongoose               | Acts as a front end to MongoDB, a NoSQL database that performs the role of a local library using a document-oriented data model.
|Node.js                        |Executes JavaScript code outside a web browser.
|GraphQL| A query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more.
Apollo Client| A comprehensive state management library for JavaScript that helps developers structure code when using GraphQL.
Babel                  |An npm JavaScript compiler that reads your JavaScript and converts it into other JavaScript. Basically, makes your new JavaScript suitable for older browsers.
|

## Home Media Library Webpage

The Home Media Bookshelf is an application designed to allow the user to join a media library containing movies, TV shows and music in multiple hardcopy formats that are managed across the service. Ultimately the purpose is for users to be able to borrow items without cost.

It provides a header and footer which remain constant and has been purposedly designed to be effortless to use and aesthetically pleasing. 

The Header contains a Navigation Bar with the following direct links:

 |         Page Link               |                                      Description                                                                             |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
|Home:                      |This is the default window. Contains an image of the media library and who it was created by and a summary description of the application and its ultimate. purpose                                      |
Library:                    | Displays a list of all media items recorded on the Mongo database.
Add| Allows the user to add a media item (create a record) directly onto the Mongo database.
Update| Allows the user to update details of a media item stored on the Mongo database.
Delete| Allows the user to delete a record directly from the database.
Message      | Displays a form with the fields *name*, *email* and *message*. Plus, a **submit** button to enable the enquiring person to contact me.                                                                                   |
|Login   | Enables members to login to the database in a secure environment.
|Signup  |  Enables users to signup as a member. 

The Footer contains a notation of the month the application was and a link to its corresponding Github repository.

## Project Description

The Home Media Library Webpage has been created as the final project of the coding bootcamp to increase my visibility and highlight my up-to-date skills, talents and experience to future employers. It is a MERN full-stack application with a front-end and back-end that interface with each other to store and retrieve data from a Mongo Database.

**Note:** A description of how to use the completed web page appears in the 'Usage' section below.

The high-level steps I took to create this application are as follows:

- To commence the project, I installed React.js which automatically installed most of the front-end folders and some files. I then created a file structure for the back end.
- At first I mainly focussed on the back end 'server' side. That is coding the server.js, models, typeDefs and resolvers.
- Getting the resolvers and queries to work in GraphQL was challenging.
- Once these were working, I moved to the front-end creating components and focussed on linking them to the backend.

The project was far more complex than what I have just described, but these steps show the overall order in which I built the application.  

## Installation

N/A

## Usage

The Home Media Bookshelf webpage is a fully functional web application. 

When first opened the application defaults to the Home page window, between the constant Header and Footer sections.

The application was purposely designed and built to be user friendly. 
- Firstly, the user clicks on Login or Signup link, completes there required details and presses the submit button. Once logged in
- The user simply clicks on the required menu option located in the header except for the Library section the user fills out the form displayed and clicks on the submit button.
- Note that the Contact section allows the user to send me a message.
- To navigate through the application the user clicks on the relevant menu option located in the header.
- A link to the project github repository is located in the footer on the far-right side.

## Deployed Application and Screenshot

Link to deployed application:

https://evening-lake-81458.herokuapp.com/

Screenshot:

![image](https://github.com/NealeAust/Home-Media-Bookshelf/assets/115671306/0e2ab5fa-fc08-4aa4-8158-f99df474def4)

## Credits

N/A

## Licence

MIT

