# Netflix-GPT

Netflix-GPT is a Netflix-inspired movie browsing app built with React, Redux, Firebase Authentication, TMDB, and OpenAI. It combines a familiar streaming-style interface with AI-powered movie suggestions, allowing users to browse trending content or search for movie recommendations using natural language.

## Live Demo

[Live Site](https://netflix-gpt-sable-delta.vercel.app)

## Features

- Netflix-style UI for a familiar streaming experience
- User authentication with Firebase
- Sign up and sign in flow with client-side validation
- Browse page with multiple movie categories
- Now Playing movies
- Popular movies
- Top Rated movies
- Upcoming movies
- Featured hero section with trailer background
- GPT-powered movie recommendation search
- TMDB-powered movie lookup for suggested titles
- Global state management with Redux Toolkit
- Responsive styling with Tailwind CSS

## Tech Stack

- React
- React Router
- Redux Toolkit
- Firebase Authentication
- OpenAI API
- TMDB API
- Tailwind CSS
- Create React App

## Project Structure

```bash
src/
  components/
    Body.js
    Browse.js
    GptSearch.js
    GptSearchBar.js
    GptMovieSuggestion.js
    Header.js
    Login.js
    MainContainer.js
    MovieCard.js
    MovieList.js
    SecondaryContainer.js
    VideoBackground.js
    VideoTitle.js
  hooks/
    useMovieTrailer.js
    useNowPlayingMovie.js
    usePopularMovie.js
    useTopRatedMovie.js
    useUpcomingMovie.js
  utils/
    appStore.js
    constants.js
    firebase.js
    gptSlice.js
    movieSlice.js
    openAi.js
    userSlice.js
    validate.js


How It Works
Authentication
Users can sign up and sign in using Firebase Authentication. The login form validates email format and password strength before submitting.

Movie Browsing
After login, the app loads different movie categories from TMDB using custom hooks and stores them in Redux.

GPT Search
The GPT search bar accepts a natural language prompt such as what the user wants to watch. OpenAI returns recommended movie names, and the app then searches those titles on TMDB to show actual movie results.

Environment Variables
Create a .env file in the root of the project and add:

REACT_APP_TMDB_API_KEY=your_tmdb_bearer_token
REACT_APP_OPENAI_API_KEY=your_openai_api_key


Installation
git clone https://github.com/sadgi41/Netflix-GPT.git
cd Netflix-GPT
npm install
npm start
Available Scripts
npm start
npm run build
npm test


Future Improvements
Move OpenAI requests to a backend for better API key security
Add loading and error states across API flows
Add user profile personalization
Add watchlist and favorites
Improve accessibility and keyboard navigation


Author
Sadgi Jain

GitHub: sadgi41
