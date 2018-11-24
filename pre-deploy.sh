# build clients
cd clients/user
sudo docker-compose up user_build

cd ../../clients/admin
sudo docker-compose up admin_build

cd ../../clients/editor
sudo docker-compose up editor_build
cd ../..

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
