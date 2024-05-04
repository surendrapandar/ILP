# Docker 

- Docker is a set of platform as a service products that use OS-level virtualisation to deliver software in packages called containers

- Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels.

__Containerisation is increasingly popular because containers are:__

- Flexible: Even the most complex applications can be containerised.

- Lightweight: Containers leverage and share the host kernel, making them much more efficient in terms of system resources than virtual machines.

- Portable: You can build locally, deploy to the cloud, and run anywhere.

- Loosely coupled: Containers are highly self sufficient and encapsulated, allowing you to replace or upgrade one without disrupting others.

- Scalable: You can increase and automatically distribute container replicas across a datacenter.

- Secure: Containers apply aggressive constraints and isolations to processes without any configuration required on the part of the user.

## Images 

 An image includes everything needed to run an application — the code or binary, runtimes, dependencies, and any other filesystem objects required.

 ## Docker mostly use commands

1. docker –version
2. docker pull (docker pull "image-name")
3. docker run (docker run -it -d "image-name")
4. docker ps
5. docker stop
6. docker images
7. docker rm