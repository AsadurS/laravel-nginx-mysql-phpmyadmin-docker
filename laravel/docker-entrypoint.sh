#!/bin/sh
set -e

# Your custom entrypoint commands go here
tail -f /dev/null &
composer install

php-fpm
exec "$@"