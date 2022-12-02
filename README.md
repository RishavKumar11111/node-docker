# node-docker

## docker commands

###### docker build .
#### docker image ls / docker images (show list of locally stored docker images)
##### docker image rm ImageID / docker rmi ImageID (delete an image from local storage)
### docker build -t ImageName .
### docker run -p port (on which traffic will be sent to the host machine):port (on which traffic will be sent to the container) -d (detached mode from the terminal) --name ContainerName ImageName (image from which the container will be created)
#### docker ps (show list of running containers)
##### docker rm ContainerName -f / docker rm ContainerID -f (force delete a running container)
#### docker exec -it (interactive mode) ContainerName bash (to look into the file system of container) / docker exec -it ContainerID bash (to access the running container)
###### Volumes allows us to have persistent data in our containers. Bind Mount is a special kind of Volume in Docker because it allows us to sync a folder or a file system in the host machine to a folder in the docker container
### docker run -v pathToFolderOnHostMachine (absolute path or %cd% in windows cmd or ${pwd} in windows powershell or $(pwd) in linux or mac):pathToFolderOnContainer -p portOfHostMachine:portOfContainer -d --name ContainerName ImageName
###### nodemon not restarting inside docker -> nodemon -L index.js or nodemon --legacy-watch index.js
#### docker ps -a (to show all running and exited containers)
#### docker logs ContainerName
###### To prevent local folder from overwriting /app directory and deleting node_modules folder due to Bind Mount volume, an anonymous volumes is to be created. All volumes in docker container are based off of specificity (since /app/node_modules is a longer path, it is more specific)
### docker run -v pathToFolderOnHostMachine:/app -v /app/node_modules -p portOfHostMachine:portOfContainer -d --name ContainerName ImageName

### FROM node:18
### WORKDIR /app
### COPY package.json .
### RUN npm install
### COPY . ./
### EXPOSE 3000
### CMD ["node", "index.js"] or CMD ["npm", "run", "dev"] for nodemon