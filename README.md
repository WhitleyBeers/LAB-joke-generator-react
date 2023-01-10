# React Joke Generator

[View Sample](https://ljkbro.csb.app/)

## Topics
- [Starting the Project](#starting-the-project)
- [Using axios](#using-axios)
- [Deploying on Netlify](#deploying-on-netlify)
___

## Project Deets
You will be creating a Joke Generator!

This project is meant to get you thinking in React and to help you with some concepts.

### Acceptance Criteria:
1. When a user first loads the app, a button appears on the DOM that reads "Get a Joke"
1. When the user presses the "Get a Joke" button, an API call is made to the joke API and the joke setup appears on the DOM.
1. When a user presses the "Get a Joke" button, the button text changes to "Get Punchline"
1. When a user presses the "Get Punchline" button, both the joke setup and delivery are on the DOM along with a button that reads "Get Another Joke"
1. When the user presses the "Get Another Joke" button, the app starts over from step 3.

## Starting the Project
1. Clone this repo to your local machine
1. Open the `package.json` file and change the `name` property to the name of your application, and `author` to  your name.
1. From your command line, be in the root directory and run `npm install` OR `npm i` for short.
1. Next, run `npm run prepare`. This command sets up husky to track eslint errors on commit that will make your deploy fail on Netlify.
1. To start your application, run `npm run dev`. THIS IS THE COMMAND YOU WILL USE TO RUN YOUR DEVELOPMENT SERVER FROM NOW ON.
1. Open [http://localhost:3000](http://localhost:3000) with your browser.

### If you see this, you are set to go!
<img width="510" alt="Screen Shot 2022-07-09 at 11 29 54 AM" src="https://user-images.githubusercontent.com/31781724/178114566-b2a67164-a604-4e10-9430-4c3054e2d8ab.png">

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

### Using Axios
> For every file you will need to make an XHR request in, you will need to require Axios
```js
import axios from 'axios';

const examplePromise = () => {
  axios.get('http://localhost:3001/example')
    .then((data) => {
      console.warn(data);
    })
    .catch((error) => {
      console.error(error);
    });
});
```

### Deploying on Netlify
Netlify will automatically detect your project and prepopulate the settings, but should something go wrong and it does not, here are the commands:

- Build Command: `npm run build`
- Publish directory: `.next`

#### Additional Steps to Take on Netlify
- Add Environmental Variables
    - Any Enviromental variables you are using in your `.env` file should be added to Netlify. 
        - Go to Site settings > Build & deploy > Environment > Environment variables and the keys and values there.
        
## Learn More about Next.js
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
