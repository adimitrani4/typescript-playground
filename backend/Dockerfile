FROM node

COPY ./dist ./dist

COPY ./node_modules ./node_modules

COPY package.json .

COPY package-lock.json .

# use the value to set the ENV var default
ENV env_user_name=default

#RUN npm install

#the node server is running on port 8080 
EXPOSE 8080

ENTRYPOINT ["npm", "run", "start"]