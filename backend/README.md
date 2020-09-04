# Walk it out Back-End

### Updated by Ira Herman 08/2020

## Setup instructions:

To set it up, add your own `.env` file to the root with this in it:

```
MONGODB_URI="mongodb+srv://<yourmongoconnectionstringhere>/walk-it-out?retryWrites=true&w=majority"
```

_Note: Please add your own connection string_

Then `npm i`

Then run this (the first time only) to seed the database with some dogs:

```
node db/seed.js
```

Now you're ready to test out those endpoints, wire up a react front end, add auth, etc. Enjoy!

Visit: [http://localhost:3001/api/dogs](http://localhost:3001/api/dogs)

> NOTE: It's on port 3001, not 3000
