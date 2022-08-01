# boiler-library

A website to host access to the [Boiler Book Club](https://boilerbookclub.com) library. Members are able to perform all of the actions that you can expect in a library, such as borrowing and returning books. Note that this is just a GUI to simplify use; all of the books are physically stored in the office and so you must be in person to make use of the website.

All developers and users are expcted to be members of the club. To join, follow directions on the main club website or discord. This project is led by Kai Tinkess, the Communication Officer of the club — contact me through email or discord for any questions.

Remaining items before we have a functional product:
- [ ] Revamp Modal screen for each book to look better and have more information
- [ ] Require member only password to log in or set up google auth
- [ ] Deploy at boilerlibrary.com
- [ ] Migrate Firestore from Testing to Prod

## Installation

1. [Install npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
1. Clone the repository
2. `npm ci`
4. `npm start`

## Deployment Specs

The website is hosted on 

## Tasks

These do not have tracking issues or PRs yet, but if you would like to contribute they are a good place to start.

- [ ] Write tests
- [ ] Connect log in to google or microsoft auth through firebase
- [ ] Make searching more advanced with tags separated by some delimiter 
- [ ] Pull more information about each book to display (description, rating, links, etc)
- [ ] Have users verify if the cover of the book they are donating is accurate
- [ ] Look into storing a snapshot of the data locally or creating a listener to reduce firestore requests 

----
### Contributors

- Kai Tinkess

### Screenshots

![LoginScreen](/screenshots/loginscreen.png)


