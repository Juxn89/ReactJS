# Deploy to Heroku
Step by step to deploy on *Heroku* using its CLI.

- Install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).
- Using the terminal browse to project directory and use the next commmand: `heroku login`; It will open a browser to login on *Heroku*.
- Use the next command: `heroku git:remote -a <YOUR_HEROKU_PROJECT_NAME>`.
- For deploying to Heroku using CLI; use the next command: `git push heroku master`.