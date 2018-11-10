## am4games

Just a web application

### Development

Development is carried out with the help of the [Docker](https://www.docker.com/).

- Services can be combined - `sudo docker-compose up editor_client_dev database_dev`
- Editor client - `sudo docker-compose up editor_client_dev`
- Admin client - `sudo docker-compose up admin_client_dev`
- User client - `sudo docker-compose up user_client_dev`
- Editor api server - `???`
- Admin api server - `???`
- User api server - `???`

### Deploy (branch `deploy`)

1. verify authorization in the console or run `heroku login`
2. run `sh deploy.sh`



## **In plans:**

#### _Branch: init_
- [x] Setup three clients for each role
- [x] Setup server with express.js and try to make the entry file as simple as possible
- [ ] Setup performance tests and then try apply best practices [like this](http://expressjs.com/en/advanced/best-practice-performance.html)
- [ ] Setup tests infrastructure
- [ ] Setup normal logger for server?
- [x] Setup another database (mongodb)
- [x] Come up with a helper script, to interact with all the package.json files. (docker-compose.yml)
- [x] Deploy on Heroku and try somehow launch many servers (branch "deploy")
