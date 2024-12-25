---
title: Docker
description: Docker Intro Notes
date: '2024-10-10'
draft: false
slug: /blog/docker
category: coding
tags:
  - DevOps
  - Docker
---

# Commands

## Docker

- `docker pull <image>:<tag>` - pull image with given tag from Docker Hub
- `docker run <image>:<tag>` - create new container from image with given tag
- `docker run <id>` - start container with id
- `docker run -d -p <machine_port>:<container_port> <image>:<tag>` - create new container from image with machine port bound to container port
- `docker ps` - see list of running containers
- `docker ps -a` - see list of all containers
- `docker container prune` - remove all stopped containers
- `docker stop <id>` - stop container with id
- `docker load < image.tar` - create an image from a tar file

## Docker-Compose

- `docker-compose up` - create container according to `docker-compose.yml` file.
- `docker-compose down` - remove container
- `docker-compose start` - start existing container
- `docker-compose stop` - stop container
