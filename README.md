# Boxcars Backend

A Node.js/TypeScript backend for the Automotive Website project. This backend provides RESTful APIs for user authentication, vehicle management, and contact handling, built with Express and TypeScript.

## Features

- User authentication (JWT-based)
- Vehicle CRUD operations
- Contact form management
- Input validation with Zod
- Error handling middleware
- Modular folder structure

## Folder Structure

```
├── docs/                # Documentation and assignment files
├── src/
│   ├── configs/         # Database and environment configs
│   ├── constants/       # App constants and error codes
│   ├── controllers/     # Route controllers
│   ├── middlewares/     # Express middlewares
│   ├── models/          # Mongoose models
│   ├── routes/          # Express route definitions
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions
│   └── zodSchemas/      # Zod validation schemas
├── nodemon.json         # Nodemon config
├── package.json         # Project metadata and scripts
├── tsconfig.json        # TypeScript config
├── vercel.json          # Vercel deployment config
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sanchitbajaj02/boxcars-backend

   cd boxcars-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Project

- For development (with auto-reload):
  ```bash
  npm run dev
  ```
- For production build:
  ```bash
  npm run build
  npm start
  ```

## API Endpoints (Overview)

- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – User login
- `GET /api/vehicles` – List all vehicles
- `POST /api/vehicles` – Add a new vehicle
- `POST /api/contact` – Submit a contact form

> For detailed API documentation, see the `docs/` folder or refer to the controller files in `src/controllers/`.

## Environment Variables

Copy the contents of `.env.example` to create a `.env` file in the root directory and add your environment variables.


## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)
