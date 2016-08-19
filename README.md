# Ideas-Website

A website where you can submit your ideas for movies, books, games etc. and get feedback on them.

##Used technologies:
- Back-end:
  - [Node.js](https://nodejs.org/en/)
  - [Express](http://expressjs.com/)
  - [Mongodb](https://www.mongodb.com/)
- Front-end:
  - HTML
  - CSS

##Installation:
  After cloning the project onto your computer, you need to download these:
  - Mongodb: 
    - [Mongodb installation documentation](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/#install-mongodb-community-edition)
    - to see the database status `sudo service mongodb status`
    - check if everything is working `/etc/init.d/mongodb status`
    - for configuration `sudo <text editor> /etc/mongodb.conf`
  
  - Node.js
    - [Node.js installation documentation](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)

##How to use the website:

  Start by opening the website by going to the adress **localhost:3000**. Next you navigate to the register tab in the navigation and fill in the form. Then you can go to the post tab and start writing your first post. If you navigate to the home page you will see your post there. Below every post is a comment form in which you can submit your opinion on the topic.
