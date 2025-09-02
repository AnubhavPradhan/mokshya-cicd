# Stage 1: Base image
FROM node:20-alpine AS base
WORKDIR /app

# Stage 2: Production build mode.
FROM base AS prod
COPY package*.json ./
RUN npm ci
COPY . .
ARG SITE_URL
ENV SITE_URL=${SITE_URL}
RUN npm run build

# Stage 3: Serve with `docusaurus serve`.
FROM prod AS serve
EXPOSE 3000
# Assumes package.json has: "serve": "docusaurus serve"
CMD ["npm", "run", "serve", "--", "--host", "0.0.0.0", "--no-open"]
