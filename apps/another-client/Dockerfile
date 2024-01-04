FROM node:20 AS Base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /usr/src/app
COPY . .
RUN pnpm install --frozen-lockfile && \
    pnpm build another-client
CMD ["pnpm", "start:prod:another-client"]