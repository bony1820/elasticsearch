# Set up ElasticSearch
brew tap elastic/tap

# Start ElasticSearch in background:
brew services start elastic/tap/elasticsearch-full

# Start ElasticSearch in foreground:
elasticsearch

# Run demo
node main