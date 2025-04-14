
# Movie App FrontEnd (MVP)
This is a responsive web application MVP for searching Movies and TV Shows.  
It leverages the TMDB API to fetch the latest and most popular media content.
A modern movie browser built with **React**, **TypeScript**, and **Chakra UI**. 

## Features
- Search functionality for Movies and TV Shows
- Home page displays latest popular movies
- Top-rated Movies and TV Shows section
- Fully responsive design for mobile and desktop

## Tech Stack
- React
- TypeScript
- Chakra UI v2.8.0
- React Hooks
- Keen Carousel slider

## Setup Instructions

1. **Clone the repo**
    ```bash
    git clone https://github.com/rahaa-EM/movie-app-frontend.git
    cd movie-app
2. **Install dev dependencies**
    ```bash
    npm install
3. **Create .env file**
    ```bash
    PORT=any port other than 3000
    REACT_APP_API_BASE_URL=http://localhost:<SERVER_PORT>/api
4. **Clone backend**
    ```bash
    git clone https://github.com/rahaa-EM/movie-app-backend.git
5. **Run the backend server**
    Make sure you have the server running at a same port in the .env base URL(Deafult 3000)
6. **Run the app**
    ```bash
    npm start

## Search Suggestions
- Navigate to the **Search** page
- Use the dropdown to choose a category:  
  - Movies  
  - TV Shows  
  - All
- Type your search. Example:  
  > `breaking bad`
- The results will dynamically update based on your category selection

## Future Improvements

Here's what I'd like to add:

- **Account page** with authentication using TMDB accounts
- **Pagination** to fetch additional results beyond page 1
- **Save movies** feature to allow users to bookmark or favorite content


Thank you for checking out this project!
