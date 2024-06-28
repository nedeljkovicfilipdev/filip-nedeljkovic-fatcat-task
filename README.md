# Project Summary

This project involves converting a JavaScript codebase to TypeScript, implementing several React components, and adhering to strict TypeScript and ESLint rules. Key tasks include creating a scalable list component to fetch and display API data, a form generator component with validation and API interaction, and a page generator component for dynamic layouts and components. The project emphasizes reusability, scalability, and following coding standards without any linting or TypeScript errors.

# Installation

### Clone the Repository:
git clone https://github.com/nedeljkovicfilipdev/filip-nedeljkovic-fatcat-task.git

### Navigate to the Project Directory
cd filip-nedeljkovic-fatcat-task

### Install Dependencies
npm install

### Start the Project
npm run dev

#Implementation

## Create a List Component

A feature for fetching and displaying a list of users.
Interface User defines the structure of user object and UserItemProps defines props expected by component. UserListItem receives "user" object as a prop and has styled list item. React Hook "useEffect" is used to fetch user data from the API when component mounts. Conditional renders depending on state: 'loading' if true, display loading message and 'error' is not null, display error message.

## Create a Form Generator Component

A feature for allowing users to input data, validate it against a schema and submit it via API.
Validation for title and body input, max 20, max 100 characters respectively. CreateForm component sets up the form using FormGenerator component. Render form renders form fields for 'title' and 'body' using 'Controller'. Form Generator Component handles setup, validation and submission. Takes 'validationSchema' and 'renderForm' as props. There's react-query mutation that handles form submissions to a mock API. Form displays different states based on mutation status ('isSuccess','isPending','isError').

## Create a Page Generator Component

A feature for dynamically rendering sections and their components based on 'data' passed as props.
Defines several interfaces and types. Taking data of type LayoutSection[] as props. Maps thourgh each LayoutSection in data and renders page for each one.
