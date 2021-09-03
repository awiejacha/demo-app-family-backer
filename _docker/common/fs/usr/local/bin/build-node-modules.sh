function build_node_modules() {
  if [ -d node_modules ] && [ -f node_modules/_built ]; then
    echo "Node modules already built, skipping"
    return
  fi

  if [ ! -d node_modules ]; then
    echo "No node modules, building..."

    if [ "${NODE_ENV}" != "development" ]; then
      npm clean-install --production
    else
      npm clean-install
    fi

    touch node_modules/_built
    echo "Node modules build finished"
    return
  fi

  while [ ! -f node_modules/_built ]; do
    echo "Waiting 30 secs for node modules to be built in other container..."
    sleep 30
  done
  echo "Detected built node modules"
}
