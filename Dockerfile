FROM node:14-buster-slim

LABEL Maintainer="Adrian Wiejacha"
LABEL Email="adrian.wiejacha@gmail.com"

COPY ./ /home/node/
COPY _docker/common/fs/ /

RUN apt-get -y update \
    && apt-get -y install --no-install-recommends \
    cron curl wget vim nano less procps htop strace

WORKDIR /home/node
