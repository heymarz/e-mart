#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
# clean
rm -rf public
# build
yarn install --prefix client && yarn run build --prefix client
# migrate
bundle exec rake db:migrate
# postbuild
cp -a client/build/. public/
