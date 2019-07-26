# Discussion Board Project
### Application Architecture

Application created using a MERN stack.

* MongoDB database
* Node (_express_, _mongoose_, _bcrypt_, _validator_) server API

### Running as node application locally
1. Install mongoDB ([installation guide](https://docs.mongodb.com/manual/administration/install-community/))
2. Install Node ([Node Downloads](https://nodejs.org/en/download/))
3. Clone down the repository: `git clone https://github.com/Monika-Mistry/Node-Assessment.git`
4. Go to root of project and run the following two commands:
```
npm install
npm install -g nodemon
```
5. Run the application: `nodemon ./server.js`

### Running with Docker
1. Clone down the repository: `git clone https://github.com/Monika-Mistry/Node-Assessment.git`
2. Install docker-compose:
```
sudo curl -L "https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```
3. Build new images for the services: `docker-compose build`
4. Running the application: `docker-compose up -d`
5. Tearing down the application: `docker-compose down --rmi all`

 
