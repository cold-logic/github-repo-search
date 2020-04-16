# GitHub Repo Search

A containerized web app built in React that allows you to search for GitHub repos by name. Returns a list of repository names that match and their URL.

## Setup

1. Install [Docker](https://www.docker.com/community-edition) on your machine if it isn't already
2. Run Docker and let it finish initializing
3. Open the Terminal and run `docker-compose up` to start the app
4. Open your browser and navigate to [http://localhost/]()
5. Enter a search query into the search box and hit Search!

## CLI Usage

### Using Yarn

1. Open the Terminal and run: `yarn link` to symlink the script into your bin folder.
2. Then run `ghfind hello-world`

### Using Docker

1. Follow steps 1 - 3 from Setup if you haven't already
2. Open the Terminal and run:

```
docker-compose exec webapp ghfind hello-world
```

This should return a list of repository names that match "hello-world" and their URLs

## Troubleshooting

* It won't start
    * You might have another local web server already running on port 80. Try changing the port from 80 to 3000 or another port combination in the *docker-compose.yaml* file.
