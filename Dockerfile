FROM node:10
COPY . .
EXPOSE 3000
RUN npm install 
CMD ["node", "index.js"]