# todo-vue

Sample todo app built with the Vue framework.
For the accompanying documentation, see
[Understanding client-side JavaScript frameworks: Vue tutorials](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks#vue_tutorials).

For the live version, see https://mdn.github.io/todo-vue/.

## Getting Started

To get up and running, follow these steps:

```bash
npm install
```

### Compile and hot-reload for development

```bash
npm run serve
```

### Compile and minify for production

```bash
npm run build
```

### Lint and fix files

```bash
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Contributing

Our project welcomes contributions from any member of our community.
To get started contributing, please see our [Contributor Guide](CONTRIBUTING.md).

By participating in and contributing to our projects and discussions, you acknowledge that you have read and agree to our [Code of Conduct](CODE_OF_CONDUCT.md).

## License

This project is licensed under the [LICENSE](LICENSE).


## SETUP GUIDE

## PWA CONVERTION STEPS

**Step 1:** Set Up Your Vue.js Project
Install Vue CLI: If you haven't already, install Vue CLI globally using npm or yarn.

**bash**
npm install -g @vue/cli
Create a New Vue Project: Use Vue CLI to create a new Vue project.

**bash**
vue create vue-todo
Navigate to Your Project Directory: Enter the project directory.

**bash**
cd vue-todo
**Step 2:** Create the ToDo App
Install Required Dependencies: You might want to install additional packages like Vuex for state management or Vue Router if your app gets more complex.

**bash**
npm install vuex vue-router
Create Components: Create necessary Vue components such as TodoList, TodoItem, AddTodo, etc. Implement CRUD operations for todos.

Style Your App: Style your app using CSS or a CSS framework like Bootstrap or Tailwind CSS.

**Step 3:** Test Your ToDo App
Run Your App Locally: Ensure everything is working correctly by running your Vue app locally.

bash
npm run serve
Test: Test your ToDo app to ensure that adding, deleting, and updating tasks works as expected.

**Step 4:** Convert to a PWA
Install Vue CLI PWA Plugin: Add PWA capabilities to your Vue project using the Vue CLI PWA plugin.

**bash**
vue add pwa
Configure Your PWA: Update the src/main.js file to register the service worker and make your Vue app a PWA.

Test Your PWA: Ensure that your app works offline by testing it in an incognito window or using Chrome DevTools to simulate offline mode.

**Step 5:** Deploy Your PWA
Build Your PWA: Create a production build of your PWA.

**bash**
npm run build
Deploy Your PWA: Deploy your PWA to a hosting service like Netlify, Vercel, Firebase Hosting, or GitHub Pages.

Verify: After deployment, verify that your app is accessible and installable as a PWA.




## How to Connect application to a mongodb document database

To connect your Vue.js ToDo application to a MongoDB database, you'll need to set up a backend server. Typically, you'd use Node.js with Express for this purpose. Below are the steps to create an Express server that connects to MongoDB, and how to integrate this server with your Vue.js frontend.

**Step 1:** Set Up the Backend Server
1.1 Initialize the Project
First, create a new directory for your backend and initialize a Node.js project:

**bash**

mkdir backend
cd backend
npm init -y
1.2 Install Required Dependencies
Install Express, Mongoose, and other necessary packages:

**bash**

npm install express mongoose cors body-parser
1.3 Create the Server
Create a file named server.js in the backend directory and set up your Express server to connect to MongoDB

Once MongoDB is installed, start the MongoDB server:

**bash**

mongod
Step 3: Integrate Backend with Frontend
3.1 Update Vue.js Application
In your Vue.js frontend, you need to update the TodoList.vue component to fetch data from the backend and post new todos to it.


**bash**

Copy codenode server.js
4.2 Start the Frontend Development Server
Navigate to your Vue.js project directory and start the development server:

**bash**

npm run serve
Now, your Vue.js ToDo app should be connected to the MongoDB database via the Express backend. You can add, remove, and fetch todos, and the changes will be reflected in your MongoDB database.

**Summary**
Backend Server: Set up using Node.js, Express, and Mongoose.
Frontend Integration: Updated to use Axios for making HTTP requests to the backend.
Database: MongoDB for storing ToDo items.
