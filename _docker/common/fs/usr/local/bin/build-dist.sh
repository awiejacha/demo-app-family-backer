function build_dist() {
  if [ -d dist ] && [ -f dist/_built ]; then
    echo "App distribution already built, skipping"
    return
  fi

  if [ ! -d dist ]; then
    echo "No app distribution, building..."
    npm run build:ts
    npm run build:mjs
    touch dist/_built
    echo "App distribution build finished"
    return
  fi

  while [ ! -f dist/_built ]; do
    echo "Waiting 30 secs for app distribution to be built in other container..."
    sleep 30
  done
  echo "Detected built app distribution"
}
