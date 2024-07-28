<a href="https://advance-portfolio-web-app.onrender.com/">https://advance-portfolio-web-app.onrender.com/</a>
 # Advance-Portfolio-web-app
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h1>MERN Portfolio</h1>
  <p>This is a MERN stack application that serves as a portfolio website. The application includes both a frontend and a backend, with the frontend built using React and the backend using Express, MongoDB, and Node.js.</p>

  <h2>Project Structure</h2>
  <pre>
project-root/
│
├── backend/
│   ├── Routes/
│   │   └── Routes.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── mern-portfolio/
│   ├── public/
│   ├── src/
│   ├── build/  (this folder will be generated after build)
│   ├── .env
│   ├── package.json
│   └── ...
  </pre>

  <h2>Features</h2>
  <ul>
    <li><strong>Responsive Design</strong>: The frontend is designed to be responsive and works well on various screen sizes.</li>
    <li><strong>Admin Panel</strong>: Admins can add new projects through a form.</li>
    <li><strong>Category Filtering</strong>: Projects can be filtered by category.</li>
    <li><strong>Contact Form</strong>: Users can send messages via the contact form.</li>
  </ul>

  <h2>Technologies Used</h2>
  <h3>Frontend:</h3>
  <ul>
    <li>React</li>
    <li>Axios</li>
    <li>Tailwind CSS</li>
    <li>React Icons</li>
    <li>React Intersection Observer</li>
  </ul>
  <h3>Backend:</h3>
  <ul>
    <li>Express</li>
    <li>MongoDB</li>
    <li>Mongoose</li>
    <li>Dotenv</li>
    <li>Cors</li>
  </ul>

  <h2>Getting Started</h2>
  <h3>Prerequisites</h3>
  <ul>
    <li>Node.js</li>
    <li>MongoDB</li>
  </ul>

  <h3>Installation</h3>
  <ol>
    <li>
      <p>Clone the repository:</p>
      <pre><code>git clone https://github.com/yourusername/mern-portfolio.git</code></pre>
    </li>
    <li>
      <p>Install dependencies:</p>
      <p>For the frontend:</p>
      <pre><code>cd mern-portfolio
npm install</code></pre>
      <p>For the backend:</p>
      <pre><code>cd backend
npm install</code></pre>
    </li>
    <li>
      <p>Set up environment variables:</p>
      <p>Create a <code>.env</code> file in the <code>backend</code> folder with the following content:</p>
      <pre><code>MONGO_URI=your_mongodb_connection_string
PORT=your_port_number (default is 3000)</code></pre>
    </li>
  </ol>

  <h3>Running the Application</h3>
  <ol>
    <li>
      <p>Build the frontend:</p>
      <pre><code>cd mern-portfolio
npm run build</code></pre>
    </li>
    <li>
      <p>Start the backend server:</p>
      <pre><code>cd backend
npm start</code></pre>
    </li>
  </ol>

  <h3>Deploying to Render</h3>
  <ol>
    <li>
      <p><strong>Web Service for Frontend:</strong></p>
      <ul>
        <li><strong>Root Directory:</strong> <code>mern-portfolio</code></li>
        <li><strong>Build Command:</strong> <code>npm run build</code></li>
        <li><strong>Publish Directory:</strong> <code>build</code></li>
      </ul>
    </li>
    <li>
      <p><strong>Web Service for Backend:</strong></p>
      <ul>
        <li><strong>Root Directory:</strong> <code>backend</code></li>
        <li><strong>Start Command:</strong> <code>npm start</code></li>
      </ul>
    </li>
  </ol>
  <p>Ensure the environment variables are set up correctly in Render, especially the <code>MONGO_URI</code> for the backend.</p>

  <h2>Usage</h2>
  <p>The frontend will be served from the <code>build</code> folder. The backend server will handle API requests and serve the static files for the frontend.</p>

  <h2>License</h2>
  <p>This project is licensed under the MIT License.</p>

  <h2>Contact</h2>
  <p>If you have any questions or feedback, feel free to reach out:</p>
  <ul>
    <li>Email: <a href="mailto:mauryagourav82@gmail.com">mauryagourav82@gmail.com</a></li>
    <li>Phone: +91 9354291197</li>
  </ul>
</body>
</html>
