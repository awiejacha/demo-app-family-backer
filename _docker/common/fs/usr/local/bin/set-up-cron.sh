function set_up_cron() {
  printenv | grep -v printenv | sed 's/^\(.*\)$/export \1/g' > /usr/local/bin/cron-env.sh
  crontab /etc/cron.d/family-backer
}
