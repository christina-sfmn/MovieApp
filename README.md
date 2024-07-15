# Movie App

This is a movie and TV series search app built with React, TypeScript, and Tailwind CSS. Users can search for movies and series using the OMDb API, view detailed information, save favorites, and rate them. The app is responsive and includes error handling for various scenarios.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Usage](#api-usage)

## Features

- **Search Functionality**: Functionality to search for movies and series by title and type using the OMDb API.
- **Result List**: Search results are displayed in a list below the search section.
- **Detail View**: Detailed information about a movie or series can be viewed by clicking on the button "More info".
- **Favorites**: Movies and series can be saved as favorites. Favorites can be accessed through a separate button in the header section. Favorite status is saved in local storage. Favorites can be removed by clicking on the respective button in the Favorites-View.
- **Star Rating**: Favorite movies and series can be rated with stars from 1 to 5 using the `react-simple-star-rating` package. Rating status is also saved in the local storage.
- **Back Button**: Possibility to return to the previous search results using a back button in the Movie-Detail-View and Favorite-View. Search state is saved in the browser's local storage as well.
- **Responsive Design**: Fully responsive design that adapts to different screen sizes.
- **Error Handling**: Appropriate error messages for failed API requests, validation errors, or when no results are found are displayed.

## Technologies Used

- React
- Tailwind CSS
- TypeScript
- React Query
- React Hook Form
- Yup
- React Router
- React Simple Rating

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/christina-sfmn/MovieApp.git
   ```

2. Navigate to the project directory:

   ```bash
   cd MovieApp
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:5000` (or the appropriate port if different).

## Usage

- **Search**: Enter the title of a movie or series and select the type (movie or series). Click the search button to fetch results from the OMDb API.
- **View Details**: Click on any movie or series in the search results to view detailed information.
- **Favorites**: Click the favorite button to save a movie or series. Access your favorites from the header.
- **Rate Favorites**: In the favorites view, rate your favorite movies or series using the star rating component. Remove items from favorites if needed.

## Project Structure

- node_modules/
- public/
  - assets/
    - fonts/
    - icons/
    - img/
- src/
  - components/
    - Footer.tsx
    - Header.tsx
    - MovieDetail.tsx
    - MovieFavorites.tsx
    - MovieSearch.tsx
    - MovieView.tsx
  - hooks/
    - useGetMovieDetails.ts
    - useSearchMovies.ts
  - App.tsx
  - index.css
  - Layout.tsx
  - main.tsx
  - types.ts
  - vite-env.d.ts
- .eslintrc.cjs
- .gitignore
- index.html
- package-lock.json
- package.json
- postcss.config.js
- README.md
- tailwind.config.js
- tsconfig.json
- tsconfig.node.json
- vite.config.ts

## API Usage

This application uses the [OMDb API](https://www.omdbapi.com/) to fetch movie and series data. An API key is already stored in the files "useGetMovieDetails.ts" and "useSearchMovies.ts." You can also sign up for an individual API key and replace it in the respective files.
