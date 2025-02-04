# Chill Gamer Backend

Welcome to the backend of **Chill Gamer**, a user-friendly game review platform where users can explore and share reviews about their favorite games. This backend handles authentication, data management, and user-specific content, ensuring a seamless experience for all users.

## Live API

- **API Documentation**: [Chill Gamer API](https://assignment-10-uupdate.vercel.app)

---

## Technologies Used

### Backend

- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**
- **JWT (JSON Web Tokens)**
- **Bcrypt.js (Password Hashing)**
- **Dotenv (Environment Variables)**

---

## Key Features Breakdown

### Authentication

- **User Registration**: Secure registration with email and password.
- **Login**: Secure login with JWT authentication.
- **Third-Party Login**: (Optional) Third-party login options (e.g., Google).

### Reviews

- **Add Review**: API to add new reviews with fields like title, description, rating, genres, and more.
- **View Reviews**: Fetch and display all reviews or filter them based on rating, genre, or year.
- **Update/Remove Review**: Update or delete reviews for authenticated users.

### Watchlist

- **Add to Watchlist**: Users can add games to their watchlist.
- **View Watchlist**: Fetch the watchlist for authenticated users.

### Private Routes

- **Personalized Content**: Secure routes for "My Reviews" and "Watchlist" accessible only to authenticated users.

---

## Installation

Follow these steps to run the backend locally:

### Prerequisites

- Node.js installed
- MongoDB database

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/tareqahmed2/chill-gamer-server-side
