FROM node:24.15.0
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml /app/
RUN corepack enable
RUN corepack prepare pnpm@latest --activate
RUN pnpm install
COPY . .
EXPOSE 3000
CMD ["pnpm", "dev"]