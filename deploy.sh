#!/bin/bash

# build clients
sudo docker-compose up user_client_build
sudo docker-compose up admin_client_build
sudo docker-compose up editor_client_build

# move user build to server
sudo rm -rf server/sub-servers/static-user/static
cp -R clients/user/dist/. server/sub-servers/static-user/static
echo "Files for the static-user server were delivered"

# move admin build to server
sudo rm -rf server/sub-servers/static-admin/static
cp -R clients/admin/dist/. server/sub-servers/static-admin/static
echo "Files for the static-admin server were delivered"

# move editor build to server
sudo rm -rf server/sub-servers/static-editor/static
cp -R clients/editor/build/. server/sub-servers/static-editor/static
echo "Files for the static-editor server were delivered"



# Remove?
