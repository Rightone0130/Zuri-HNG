# Movie Discovery Web Application

Welcome to the Movie Discovery web application project. This application allows users to search for movies, view movie details, and save their favorite movies. It consumes data from the TMDB API and is built using React/Next.js.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js: Make sure you have Node.js installed. You can download it [here](https://nodejs.org/).

## Getting Started

Follow these steps to run the project locally:

1. Clone the repository to your local machine:

   ```bash
   git clone <repository_url>
1. Navigate to the project directory:

  cd movie-discovery-app

2. Install project dependencies:
  
  npm install

3. Obtain an API key from TMDB by signing up for a free account. This key will be used to fetch movie data.

4. Create a .env.local file in the project root and add your TMDB API key as follows:

REACT_APP_TMDB_API_KEY=your_api_key_here

5. Save the file.

6. Start the development server:

  npm start

7. Open your web browser and visit http://localhost:3000 to access the Movie Discovery web application.

Features
Homepage: Lists the top 10 movies with movie posters, titles, and release dates.
Search: Allows users to search for movies by title.
Movie Details: Provides detailed information about a movie, including title, release date, runtime, and overview.
Project Structure
The project is organized as follows:

src directory: Contains the application source code.
public directory: Contains static assets.
Error Handling
The application handles errors gracefully and displays meaningful error messages in case of API failures or other issues.

Hosting
You can host this application on platforms like GitHub Pages or Netlify for public access.

Contributing
If you'd like to contribute to this project, please fork the repository and create a pull request with your changes.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Note: This project was created as a part of the STAGE 2 TASK and is meant for educational purposes. It uses data from the TMDB API, and you must comply with their terms of use when hosting the application.

Enjoy exploring and discovering movies with the Movie Discovery web application!


Make sure to replace `<repository_url>` with the actual URL of your Git repository. Additionally, replace `your_api_key_here` in the `.env.local` section with your TMDB API key.

This README provides detailed instructions for setting up and running the project locally.
