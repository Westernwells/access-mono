FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN yarn install

# Copy the rest of the application
COPY . .

# Compile TypeScript
RUN npx tsc

# Second stage
FROM node:18-alpine

WORKDIR /app

# Copy package.json and install production dependencies only
COPY package.json ./
RUN yarn install --production

# Copy compiled JavaScript from the builder stage
COPY --from=builder /app/dist ./dist

EXPOSE 3838

# Run the compiled JavaScript
CMD ["node", "dist/index.js"] 