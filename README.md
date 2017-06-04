# [The Club](https://the-club.herokuapp.com)

![Login](screenshots/ClubLogin.png)

The Club is a full-stack web application that serves as a social platform for book clubs. It creates a central location for club members to communicate, as well as track current and past books they have read.

Upon logging in, each member is able to share thoughts, articles, events, videos and resources with other members via the message board.

Additionally, all members have the same view of the featured current book that the group has selected and the Archive of all past books that have been read and discussed.

Individually, members are able to add other books of interest to their personal “Night Stand”. These books could be recommendations received from other members or books they have come across that they might want to chose when it is their turn to select the book.

## Application Features

### * Message Board

![Message Board](screenshots/MessageBoard.png)

### * Book Search with results from Open Library Books api

![Book Finder](screenshots/BookFinder.png)

### * Spotlight (Featured Book of the Month)

![Spotlight](screenshots/Spotlight.png)

### * Archive (All books read and discussed by the club)

![Archive](screenshots/Archive.png)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need to have the following software installed.

```
[Node.js](https://nodejs.org/en/)
```

```
[PostgreSql](https://launchschool.com/blog/how-to-install-postgresql-on-a-mac)
```

```
[Postico](https://eggerapps.at/postico/)
```

### Installing

Steps to get the development environment running.

1. Clone the repository to your local machine.

```
git clone https://github.com/BetsyRowley/the_club.git
```

2. Install all dependencies.

```
npm install
```

2. Ensure PostgreSql is running.

```
brew services start postgresql
```

3. Start Grunt.

```
grunt
```

4. Spin up the Server.

```
npm start
```

4. Open in the browser.

```
localhost:8000
```

## Built With

* PostgreSql
* Express.js
* AngularJS
* Node.js
* Grunt
* HTML5
* CSS3
* Bootstrap
* Heroku
* Heroku Postgres
* Passport.js
* [Open Library Books API](https://openlibrary.org/dev/docs/api/books)

## Documentation

[Scope Document](https://docs.google.com/document/d/1ak0J5unG9HHWWuefwKQ6NKXOXi7Oth97aYg4_sPRnNc/edit?usp=sharing).

## Authors

* [**Betsy Rowley**](https://github.com/BetsyRowley)

## Acknowledgments

* Prime Digital Academy Instructor Kris Dszafranski for providing the Passport Code Base.
* Prime Digital Academy Instructors Chris Black, Scott Bromander, and Luke Schlangen for their on-going support.
* Center for Ants Book Club for their love of books and inspiration.
