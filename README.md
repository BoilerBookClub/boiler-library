# boiler-library

A website to host access to the [Boiler Book Club](https://boilerbookclub.com) library. Members are able to perform all of the actions that you can expect in a library, such as borrowing and returning books. Note that this is just a GUI to simplify use; all of the books are physically stored in the office and so you must be in person to make use of the website.

All developers and users are expcted to be members of the club. To join, follow directions on the main club website or discord. This project is led by Kai Tinkess, the Communication Officer of the club — contact me through email or discord for any questions.

## Installation

1. [Install npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
1. Clone the repository
2. `npm ci`
4. `npm start`
   1. Or `npm run build; firebase serve`


## Deployment Specs

The website is hosted using Firebase. To deploy:
1. `firebase login`
   1. You must log in to the Boiler Book Club google account.
2. `npm run build`
3. `firebase deploy`

## Tasks

These do not have tracking issues or PRs yet, but if you would like to contribute they are a good place to start.

- [ ] Write tests and documentation
- [ ] Make searching more advanced with user assigned tags and delimiters
- [ ] Pull more information about each book to display (description, rating, links, etc)
- [ ] Have users verify if the cover of the book they are donating is accurate
- [ ] Look into storing a snapshot of the data locally or creating a listener to reduce firestore requests 
- [ ] Design and implement more secure data access through Firestore rules

----
### Contributors

- Kai Tinkess
- Jack Moffat

### Screenshots

![LoginScreen](/screenshots/loginscreen.png)

![Home](/screenshots/home.png)

![Library](/screenshots/library.png)
