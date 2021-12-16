# Slides remote control
Allow other partner to press left / right arrow keys remotely. Useful for Powerpoint / Google Slides presentation.

## Installation
- Install nodejs 16 and npm. 'node-key-sender' dependency needs java to be installed
- Then install node dependencies>
```
npm i
```

## Usage
To run the server, type the following command in the terminal:
```
nodemon server.js
```

Open the browser and type the following URL:
```
http://localhost:15551/slides.html
```

Open port 15551 in your firewall and set up port forwarding. Then you will be able to control your presentation remotely even outside your local network.

Tested on Windows 10.

