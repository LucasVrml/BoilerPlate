FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173

RUN npm install clsx @radix-ui/react-label @radix-ui/react-slot tailwind-merge class-variance-authority
RUN npm install tw-animate-css

CMD ["npm", "run", "dev"]
