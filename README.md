# node-docker

# docker commands

# docker build .
# docker image ls / docker images (show list of locally stored docker images)
# docker image rm ImageID / docker rmi ImageID (delete an image from local storage)
# docker build -t RepositoryName .
# docker run -p port (on which traffic will be sent to the host machine):port (on which traffic will be sent to the container) -d (detached mode from the terminal) --name ContainerName RepositoryName (image from which the container will be created)
# docker ps (show list of running containers)
# docker rm ContainerName -f / docker rm ContainerID -f (force delete a running container)
# docker exec -it (interactive mode) ContainerName bash (to look into the file system of container) / docker exec -it ContainerID bash (to access the running container)