# URL Shortener Project

This is a simple URL shortener application built with Node.js, Express, and EJS, which allows users to shorten long URLs into short, shareable links.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Running Locally](#running-locally)

## Features

- Shorten long URLs to shorter links.
- Redirect users from shortened URLs to original URLs.
- Track the number of times a shortened URL has been accessed.
- User-friendly interface with EJS templating.

## Tech Stack

- **Frontend**: EJS (Embedded JavaScript)
- **Backend**: Node.js, Express
- **Database**: MongoDB.
- **Others**: JavaScript, HTML, CSS

## Installation

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [Git](https://git-scm.com/)

### Clone the Repository

```bash
git clone https://github.com/your-username/url-shortener.git
cd url-shortener

## Install Dependencies
npm install

## Environment Variables
Create a .env file in the root directory and add the following environment variables:

PORT=3000
DATABASE_URL=your_database_url_here

## Running Locally
To start the project locally, use the following command:

npm start
This will start a local development server. Open http://localhost:3000 in your browser to access the application.


```
