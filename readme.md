# Sahitya - A github for authors

<p>Sahitya App aims to provide the community of authors with a platform for collaborative writing and publishing, 
giving them features like version control, merging and rejecting content requests, and also help them publish their works.</p>

### Stack used: React, Sass, JavaScript, Node.Js, Express, MongoDB

***

## Starter Guide 🚀
* **Yarn and Node.js must be previously installed**
### 1. Clone this repo into your local machine 
<p>You can do so with any of these options</p>
<p align="center">
  <img src="/cloning.png" width="350">
</p>

### 2. Move to the directory of the project 
<p> Write in your terminal: </p>

```
    cd sahitya
```

### 3. Move to the client directory
<p>Write in your terminal: </p>

```
    cd client
```

### 4. Install the dependencies
<p>Run the next command on your terminal: </p>

```
    npm install
```
### 5. MongoDb Setup

1. you can add a key.js file in root of the project and add mongoURL in that file

```module.exports = {
    mongoURI: "<your-mongo-uri>",
 };
 ```

2. Now if you have mongo instlled already in your local System then replace "<your-mongo-uri>" to this url "mongodb://localhost:27017/{SchemaName}"

3. If you don't have mongo already installed then u can use MongoDB Atlas To Setup the The Atlas follow This Blog [Medium](https://medium.com/buka4chocksy/how-to-setup-mongodb-atlas-database-for-your-project-acd70b75a4e9)

### 5. Run the development mode
<p>Run the next command on your terminal: </p>

```
    yarn start
```

To see the project open [http://localhost:3000](http://localhost:3000) on your browser.

## And that's it! 
<p>Now you should be seeing the project on your browser like this:</p>
<p align="center">
  <img src="/sahitya.png" width="550">
</p>
<p>If you make any changes to the code, they'll be automatically shown in your browser.</p>

## Contributing guide

**1. Fork the project repository:**
Fork this repository by clicking on the fork button on the top of this page. This will create a copy of this repository in your account.

**2. Clone your fork:**
Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button and then click the copy to clipboard icon.

Open a terminal and run the following git command:

<pre>git clone "place here the url you just copied"</pre>

**3. Create a new branch:**
Change to the repository directory on your computer (if you are not already there):

cd first-contributions
Now create a branch using the git checkout command:

<pre>git checkout -b your-new-branch-name</pre>

Make changes in your local repository

**4. Commit your Changes:**
If you go to the project directory and execute the command git status, you'll see there are changes.

Add those changes to the branch you just created using the git add command:

<pre>git add .</pre>
Now commit those changes using the git commit command:

<pre>git commit -m "a meaningful message"</pre>


**5. Push your changes to Github:**
Push your changes using the command git push:

<pre>git push origin add-your-branch-name</pre>
replacing "add-your-branch-name" with the name of the branch you created earlier.

**6. Submit changes for review:**
If you go to your repository on GitHub, you'll see a Compare & pull request button. Click on that button and submit the Pull request. Comment about your pull request.

Soon I'll be merging all your changes into the master branch of this project.
(delete your branch from your fork after pull request gets accepted)

---
### Issues:
If you find an issue while using the app or have a request, log the issue. These issues will be addressed in a future code update.
