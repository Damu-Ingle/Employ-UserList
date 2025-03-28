Employ-UserList
A simple React-based user management system that allows users to log in and view a list of employees. The app uses reqres.in API for authentication and user data.

🚀 Features
User authentication using reqres.in API

Secure login with email and password

Persistent authentication using localStorage

Navigation between login and user list pages

🛠️ Tech Stack
Frontend: React.js, React Router, Bootstrap

Backend API: Reqres API

State Management: React Hooks (useState, useEffect)

📂 Project Structure
php
Copy
Edit
Employ-UserList/
│── src/
│   ├── components/
│   │   ├── Login.js   # Login page component
│   │   ├── UserList.js # User list page component
│   ├── App.js         # Main application file
│   ├── index.js       # Entry point
│── public/
│── package.json       # Project dependencies
│── README.md          # Project documentation
🔧 Installation & Setup
1️⃣ Clone the repository

sh
Copy
Edit
git clone https://github.com/Damu-Ingle/Employ-UserList.git
cd Employ-UserList
2️⃣ Install dependencies

sh
Copy
Edit
npm install
3️⃣ Run the project

sh
Copy
Edit
npm start
The app will run on http://localhost:3000.

🔐 Authentication Flow
Users log in using predefined credentials (reqres.in API).

If login is successful, a token is stored in localStorage.

If the token exists, the user is redirected to the User List page.

If not logged in, the user is redirected to the Login page.

📌 Usage Guide
Open the app in your browser.

Enter the test credentials:

Email: eve.holt@reqres.in

Password: cityslicka

Click Login to access the user list.




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
