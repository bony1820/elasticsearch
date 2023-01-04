# Set up ElasticSearch
brew tap elastic/tap

# Start ElasticSearch in background:
brew services start elastic/tap/elasticsearch-full

# Start ElasticSearch in foreground:
elasticsearch

# Run demo
node main

# Install Kibana
brew tap elastic/tap
brew install elastic/tap/kibana-full

# Start Kibana foreground
kibana
or:
bin/kibana
