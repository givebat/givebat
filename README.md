# givebat
[givebat.com](https://givebat.com) is a curated list of the best [Brave creators](https://creators.brave.com) on the web. This is the source code for the website.

## Running givebat.com locally
The stack we're using is [Meteor](https://www.meteor.com/) + [React](https://reactjs.org/).

Once you've cloned the repository, you should be able to run the website locally by navigating to the directory where you cloned it, and then running the `meteor` command in your terminal.

It should show up at `localhost:3000`.

## Deployment instructions
If you're a member of our Galaxy team on Meteor, you should be able to log in on the command line and then run this command:

`DEPLOY_HOSTNAME=galaxy.meteor.com meteor deploy [hostname] --settings path-to-settings.json` where `[hostname]` is either givebat.meteorapp.com for staging, or www.givebat.com for production, and `path-to-` is the file path to the settings.json file.
