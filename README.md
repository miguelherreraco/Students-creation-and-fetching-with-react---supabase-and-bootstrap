# Students Records with React + TypeScript + Vite + Supabase + Bootstrap

This project is a prototype that allows saving and fetching student records utilizing React + TypeScript + Vite + Supabase + Bootstrap

This templates provides a brief explanation of the architecture and the instructions to get this project running and to be tested.

Let's first understand the architecture of the project.

## Project Architecture

This project has 4 main layers:
- Components: Contains the React components that will define the user interface and user experience. Keeping them separate makes them easily reusable.
- Hooks: Contains custom hook logic that handles queries and mutations to the database. This layer abstracts away the complexity of interacting with the DB.
- Service: Configures and creates a client instance to connect to the actual database. Keeping this separate makes it easy to switch databases in the future.
- Models: Defines the data models, like Student in this case. Serves as a layer to validate and format data before sending it to the DB.

## Instructions to Test

<mark>As I'm commited to build very intuitive apps, I encourage you to try to test the app before reading the instructions.</mark>

<mark> You can directly test this app in https://students-records-for-zoni.netlify.app/</mark>

This app will allow 2 things:
1. Search a student by ID
  - There're users with Ids from 1 to 16, so you can type the number in the search field and the app will automatically searches for that student after 0.8 seconds.
2. Add a New Student
  - Press "Add student" button.
  - App will display a modal component that allows you to fulfill 3 requiered fields:
    - Student Full Name
    - Student Email
    - Sudent course
  - You can either fulfill the data and press the button  "Create" to create the student or press the button "Close" to close the modal and be able to search for users again.

  ## Instructions to run the app

  ### Requirements
  - Node JS version ^18.15.0
  - React: ^18.2.0
  - Superbase: ^2.39.3
  - Bootstrap: ^5.3.2
  - React-bootstrap": ^2.10.0

 ## Enviromental variables
  - Add a .env file with the variables:
    - VITE_SUPABASE_URL
    - VITE_SUPABASE_ANON_KEY
  - If desired, contact me for you to use a public env variables for this project. 

  To clone the configuration, you need to create a database in <mark>supabase</mark> and create a table called "students" with these columns:
  - id (int8)
  - course (varchar)
  - full_name (varchar)
  - e_mail (varchar)
Then, in supabase, go to configuration > API to get the variables values en replace and assign it to the variables in the .env file.

### Thanks for the oportunity




