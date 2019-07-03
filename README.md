# Replete Web

ClojureScript REPL web app using web workers for self-hosted eval.

## Starting REPLETE in Development

#### Terminal #1

Process the worker code and set up a watch for changes

```bash
$ clojure -A:worker
...
... done. Elapsed 34.539404977 seconds
Watching paths: /Users/ray/dev/oss/replete-web/src
```

#### Terminal #2

Start a development REPL / Browser session

```bash
$ clojure -A:repl
Watch compilation log available at: resources/public/js/compiled/out/watch.log
ClojureScript 1.10.520
cljs.user=> 
```

The REPLETE web UI will be served and you can interact / dev / test

**NOTE**: we do not use _figwheel_ so you will need to manually refresh the page to obtain changes to behaviour. As and when figwheel support for web workers is more stable / mature we will reconsider.

## Local HTTP via Docker

Assuming you have Docker all set up and running . . .

#### Starting the docker container

```bash
$ docker build -t replete .
$ docker run -d -p 9876:80 replete
```

Open `http://localhost:9876` in your browser

**NOTE**: we use `9876` here but you can choose another port.

#### Stopping the docker container
```bash
$ docker ps

CONTAINER ID        IMAGE                              COMMAND                  CREATED             STATUS              PORTS                              NAMES
e0c243f5bcc3        replete                            "nginx -g 'daemon of…"   3 seconds ago       Up 1 second         0.0.0.0:9876->80/tcp               eager_wu
...

# Find the name and issue the stop command
$ docker stop eager_wu
```

## Distribution for production HTTP servers

### Build
```bash
$ clojure -A:dist-worker
$ clojure -A:dist-app
```

### Try
You can use the same Dockerfile as above to try out the advanced build

### Serve
Production web servers should offer the files from `resources/public`

# Contributing

Happy to take PRs!

# License

Copyright © 2019 Ray McDermott, Mike Fikes, and Contributors

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
