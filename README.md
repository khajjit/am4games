## am4games ![Build status](https://travis-ci.com/khajjit/am4games.svg?branch=master)

Just a web application

#### Development

Development is carried out with the help of the [Docker](https://www.docker.com/).

- Services can be combined - `sudo docker-compose up editor_client_dev database_dev server_dev`
- Editor client - `sudo docker-compose up editor_client_dev`
- Admin client - `sudo docker-compose up admin_client_dev`
- User client - `sudo docker-compose up user_client_dev`
- Database - `sudo docker-compose up database_dev`
- Server - `sudo docker-compose up server_dev`



#### In plans:

- [ ] Setup performance tests and then try apply best practices [like this](http://expressjs.com/en/advanced/best-practice-performance.html)
- [ ] Setup tests infrastructure
- [ ] Setup logger for server
