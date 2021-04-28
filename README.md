# Express JS boilerplate



boilerplate for express js projects

### How to Use

---

1. clone this repo
2. remove `.git` directory
3. run project with 

```js
npm start
```
3. open [http://localhost:1337/](http://localhost:1337)

### Deploy To Heroku

---

1. create heroku account 
2. install `heroku-cli`
3. create heroku dynos in https://dashboard.heroku.com
4. initialize your project with git

```js
git init
```
5. remote git repo with heroku

```js
heroku git:remote -a <name of your dynos>
```
> example: `awesome-express-web`
> ```
> heroku git:remote -a awesome-express-web
> ```

6. commit in heroku git

```js
git commit -am "Done Ready To deploy"
```

7. push to heroku

```js
git push heroku master
```

Done :)

check in https://yourdynosname.heroku.app

> Ex: https://awesome-express-web.heroku.app

---

### Contributing to This Projects

if you like this project you can help with contributing in this
projects, following this step to contibute

* fork this project
* create new branch for develop some feature

> example: `add-some-feature`

* push to you git repo
* create pull requests to main repo

> Remove/replace this `README.md` for your awesome projects, or replace with your awesome readme,

> change author name in `package.json` with your name