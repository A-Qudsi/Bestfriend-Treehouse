set -o errexit

bundle install
bundle exec rake assets:precompile
bundle exec rake assets:cclean
bundle exec rake db:migrate