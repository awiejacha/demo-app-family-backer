#!/usr/bin/env bash

set -e

source build-node-modules.sh
source build-dist.sh
source set-up-cron.sh

build_node_modules
build_dist
set_up_cron

exec "$@"
