# My Dashboard

## Project Description

This project is a web application built with **React** and **TypeScript** that displays company information. The application uses the **React Mosaic** library for creating a responsive layout and **Tailwind CSS** for styling. Data about the companies is loaded dynamically from two JSON files: `securities.json` and `companies-lookup.json`.

## Features

- Display company information in three separate windows.
- Dynamically load data from JSON files.
- Responsive design that allows resizing of windows.

## Technologies

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **React Mosaic**: A library for creating responsive, flexible layouts.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

## Development

1. Clone the repository: `git clone https://github.com/LeonidShamarin/my-dashboard.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open the application in your browser: `http://localhost:3000`

## Docker

1. Build the Docker image: `docker build -t my-dashboard .`
2. Run the Docker container: `docker run -p 3000:3000 my-dashboard`
3. Open the application in your browser: `http://localhost:3000`