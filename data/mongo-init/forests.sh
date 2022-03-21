echo IMPORTING COLLECTION
tar -xzvf /docker-entrypoint-initdb.d/forests.tar.gz --directory /tmp
mongoimport --authenticationDatabase=admin --username=$MONGO_INITDB_ROOT_USERNAME --password=$MONGO_INITDB_ROOT_PASSWORD --db=pachama --collection=forests --file=/tmp/forests.json
echo "CLEANING UP"
rm /tmp/forests.json
echo DONE IMPORTING