# Replete Web

ClojureScript REPL web app using web workers for self-hosted eval.

![Build Status](https://codebuild.us-east-2.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoicTk2SFk5S3NmaExBbVMrelplVUFCc0xiUm8rUk40QjczbFQ0S2JOQUpMVnE2RllvV3RabWtZNk5tUDhBU0F5NGp0QVNhdmJnN28wZnErNFVlZHUyQXBRPSIsIml2UGFyYW1ldGVyU3BlYyI6ImFVSyt5c1FkRWpra0NFT2ciLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)


## Starting REPLETE in Development - with Figwheel

Start a development REPL / Browser session

```bash
clojure -A:fig-repl

[Figwheel] Compiling build replete to "resources/public/js/compiled/app.js"
[Figwheel] Successfully compiled build replete to "resources/public/js/compiled/app.js" in 6.961 seconds.
...
ClojureScript 1.10.520
cljs.user=> 
```

The REPLETE web UI will be served and you can interact / dev / test


## Starting REPLETE in Development - without Figwheel

Start a development REPL / Browser session

```bash
$ clojure -A:repl
Watch compilation log available at: resources/public/js/compiled/out/watch.log
ClojureScript 1.10.520
cljs.user=> 
```

The REPLETE web UI will be served and you can interact / dev / test

**NOTE**: this REPL do not use _figwheel_ so you will need to manually refresh the page to obtain changes to behaviour.

## Local HTTP via Python

```bash
python -m SimpleHTTPServer 8888
```

Open `http://localhost:8888` in your browser

`Ctrl-C` will stop the server


## Local HTTP via Docker

Assuming you have Docker all set up and running . . .

#### Starting the docker container

```bash
./run-prod-docker.sh
```

Open `http://localhost:8888` in your browser

`Ctrl-C` will stop the docker container and clean up


# Contributing

Happy to take PRs!

# License

Copyright © 2019 Ray McDermott, Mike Fikes, and Contributors

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
