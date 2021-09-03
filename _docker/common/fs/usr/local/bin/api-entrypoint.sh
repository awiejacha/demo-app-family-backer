#!/usr/bin/env bash

set -e

source build-node-modules.sh
source build-dist.sh

build_node_modules
build_dist

exec "$@"
