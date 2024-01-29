# Getting Started with ToDo Application

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## App Overview

This project aims to create a scalable ToDo application using Next.js with TypeScript, Tailwind for styling, MongoDB for database storage, and Prisma as the ORM (Object-Relational Mapping) tool. The application follows best practices for project setup, code quality, and maintainability.

## Tools and Technologies

`Next.js`: The foundation of the application, providing server-side rendering, routing, and other features.\
`TypeScript`: Adding static typing to the application for improved developer experience and code quality.\
`Tailwind CSS`: A utility-first CSS framework for styling the application.\
`MongoDB`: A NoSQL database for storing ToDo items and related data.\
`Prisma`: An ORM for interacting with the MongoDB database and managing data models.\
`Storybook`: Storybook is a tool used for testing UI components in isolation that works with JS frameworks like React, Angular, Vue, and Svelte.

## Available Scripts

In the project directory, you can run:

## `npm run dev`

This will start the Next.js development server.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## `npm run storybook       `

Open your browser and navigate to [http://localhost:6006](http://localhost:6006) to view and interact with the components.

# Component Templates

To ensure consistency in the application, component templates have been provided in the src/components/templates directory. These templates can be used as a starting point for creating new components. They include a basic structure, placeholder content, and styles.

# Project Structure

The project follows a well-organized directory structure for better maintainability:

            mytodoapp
            |-- app
            |   |-- actions
            |   |-- components
            |       |-- layouts
            |       |-- shared
            |       |-- templates
            |       |-- ui
            |   |-- types
            |   |-- utils
            |-- layout.tsx
            |-- page.tsx
            |-- .vscode
            |-- .git
            |-- config
            |-- public
            |-- storybook

The app directory is organized with various subdirectories for better organization:

`actions`: Directory for actions related to state management or other application logic.\
`components`: Directory for React components.\
`layouts`: Subdirectory for layout components.\
`shared`: Subdirectory for shared components.\
`templates`: Subdirectory for component templates.\
`ui`: Subdirectory for UI components.\
`types`: Directory for TypeScript types/interfaces.\
`utils`: Directory for utility functions and helpers.\
`layout.tsx` and `page.tsx` are placed in the root of the project. These files may represent a layout component and a page component, respectively.\
The remaining directories `(.vscode, .git, config, public, storybook)` remain the same as in the previous structure.

# App functionality:

- As a user, I should be able to add todo's.
- Aa a user, I should be able to update status of Todo.
- As a user, I should be able to delete todo.
- As A user, I should be able to view all todo's
- This applications store data in MongoDB as it retain previous state.

# additional features that can be added

- We can sort Todo's based on date, alphapets or created date
- We can add functionality filter Todos by All, Active and completed
- We can add functionality edit todos
- We can add functionality to clear all completed status todo's
- By implementing a signup process, we can offer distinct sessions for individual users, allowing us to associate specific to-do items with each user.
- We can add mulitple themes

**NOTE**

As a result, multiple entries are being added due to reducer being triggered twice. According to my research, it is caused by strickMode. Due to time constraints, I was not able to find a solution.
