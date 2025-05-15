# Access Mono

A monorepo containing:

- Express API (TypeScript)
- Hasura GraphQL Engine
- PostgreSQL Database

## Structure

```
/apps
  /api - Express API (TypeScript)
/packages
  /hasura - Hasura CLI project with metadata and migrations
```

## Environment Variables

All environment variables are stored in the root `.env` file.

## Development

### Prerequisites

- Node.js
- Yarn
- Podman
- Podman Compose
- Hasura CLI

### Setup

1. Clone the repository
2. Install dependencies:

   ```
   yarn install
   ```

3. Start the development environment:
   ```
   yarn dev
   ```

This will start:

- PostgreSQL database on port 5432
- Hasura GraphQL Engine on port 8080
- Express API on port 3000

## Accessing Services

- API: http://localhost:3000
- Hasura Console: http://localhost:8080/console (admin secret required)

## Hasura Development

To work with Hasura migrations and metadata:

```
cd packages/hasura
hasura console
```

This will start the Hasura Console and track all schema changes.
