# SampleInterface

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Screenshot

![screenshot-sample](/images/screenshot-sample.png)

## Docker Conventions

[Dockerfile](./Dockerfile)

This project uses an NGinX webserver to access production build assets. Compiled image runs `~109MB`.

No tests are run and no environment is considered.

> Note: If you're on a __Windows__ machine and set to check out system line endings (`CRLF`) you may have to save the `./nginx/default.conf` file with __*nix__ line endings (`LF`)

To run on your local machine at [http://localhost/](http://localhost/), run something like: 

```
cd [path/to/repo]
docker build -t sample-interface .
##
##              remove the container when it exits
##            /    bind to the default HTTP port
##           |    /            use a convenient alias
##           |   |           /
docker run --rm -p 80:80 --name sample-interface sample-interface
## press [Ctrl+C] to stop, or in another console run
docker stop sample-interface
```
