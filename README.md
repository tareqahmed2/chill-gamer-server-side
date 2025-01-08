# Chill Gamer: A Game Review Application

Welcome to **Chill Gamer**, a user-friendly game review platform where users can explore and share reviews about their favorite games. This project focuses on delivering an engaging and chill experience with its clean, responsive design and user-centric features.

## Live Website

[Visit Chill Gamer](https://chill-gamer.netlify.app)

## Features

- **Game Reviews**: Browse, add, and explore detailed game reviews.
- **User Authentication**: Secure login and registration using email and password, with third-party login options.
- **Dynamic Data**: Fetch, sort, and filter reviews dynamically from the database.
- **Private Routes**: Access personalized content, such as "My Reviews" and "Watchlist," only when logged in.
- **Responsiveness**: Optimized for all devices, including mobile, tablet, and desktop.
- **Dark/Light Mode**: Toggle between dark and light themes for better user experience.
- **Unique Design**: Tailored design with meaningful content, avoiding lorem ipsum.

---

## Technologies Used

### Frontend

- **React.js**
- **React Router DOM**
- **Tailwind CSS**
- **Lottie React**
- **React Simple Typewriter**
- **React Tooltip**

### Backend

- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**

### Hosting

- **Client-Side**: Netlify
- **Server-Side**: Vercel

---

## Key Features Breakdown

### Navbar

- Website Name/Logo
- Links to Home, All Reviews, Add Review, My Reviews, Watchlist, Login/Register (or user-specific menu).
- User Avatar with displayName tooltip/dropdown.
- Logout functionality redirects to the homepage.

### Home Page

- **Banner/Slider**: A carousel with meaningful slides.
- **Highest Rated Games**: Display top 6 games based on ratings fetched from the database.
- **Extra Sections**: Two additional meaningful sections.

### Review Pages

- **Add Review**: Submit new reviews with fields like title, description, rating, genres, publishing year, and more.
- **Review Details**: Display complete review information with "Add to Watchlist" functionality.
- **All Reviews**: Sort and filter reviews based on rating, year, or genres.
- **My Reviews**: View, update, or delete your own reviews.
- **Watchlist**: Manage your favorite games in a personalized watchlist.

### 404 Page

A custom-designed page for non-existing routes.

### Loading Spinner

A spinner for enhanced user feedback during data fetching.

---

## Installation

Follow these steps to run the project locally:

### Prerequisites

- Node.js installed
- MongoDB database

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/tareqahmed2/chill-gamer-server-site
   ```
2. Navigate to the directory:
   ```bash
   cd chill-gamer-server
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Add environment variables:
   Create a `.env` file and include your MongoDB URI and other secrets.
   ```env
   MONGO_URI=your-mongodb-uri
   JWT_SECRET=your-secret-key
   ```
5. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/tareqahmed2/chill-gamer
   ```
2. Navigate to the directory:
   ```bash
   cd chill-gamer
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Add environment variables:
   Create a `.env` file and include your Firebase config:
   ```env
   REACT_APP_FIREBASE_API_KEY=your-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
   ```
5. Start the client:
   ```bash
   npm start
   ```

---

## Additional Details

### Dependencies

#### Client-Side

- Axios
- React Icons
- React Toastify
- Tailwind CSS
- React Lottie
- React Router DOM

#### Server-Side

- Express
- Mongoose
- JWT
- Bcrypt.js
- Dotenv

### Pinned Repositories

- [Chill Gamer Client](https://github.com/tareqahmed2/chill-gamer): The frontend of the Chill Gamer application.
- [Chill Gamer Server](https://github.com/tareqahemd2/chill-gamer-server): The backend of the Chill Gamer application.

---

## Author

- **MD.Tareq Ahmed** - Frontend Developer
- **Location**: [Dhaka, Bangla]
- **Email**: [tareqahmed347396@gmail.com]

Thank you for visiting Chill Gamer! Enjoy exploring and sharing game reviews. 🎮
