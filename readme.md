## Flmngr file manager example

> How to use Flmngr file manager in your project

This package shows how to run [@edsdk/flmngr](https://npmjs.com/package/@edsdk/flmngr) and [@edsdk/flmngr-server](https://npmjs.com/package/@edsdk/flmngr-server) together.

ImgPen image editor ([@edsdk/imgpen](https://npmjs.com/package/@edsdk/flmngr)) is also included in this plugin as an add-on for Flmngr.


## Install, build, run

1. Clone this repository:

```text
git clone https://github.com/edsdk/flmngr-example
cd flmngr-example
```

2. Build and run it

```text
npm run start
```

Then open [http://localhost:8080] URL in your browser and enjoy the demo.


## Explanation

When you start the demo, server side part [@edsdk/flmngr-server](https://npmjs.com/package/@edsdk/flmngr-server) is listening `localhost:8080`. It returns demo page as index page. The index page loads client script [@edsdk/flmngr](https://npmjs.com/package/@edsdk/flmngr).

This script will open file manager when you click the button on the page and show you result when you close it. This frontend part will call backend at URL `http://localhost:8080/flmngr` which has access to the filesystem of your server.

When Flmngr uses its dependencies (Uploader or ImgPen image editor) it passed own configuration to dependencies, so you do not need to specify uploads URL for [@edsdk/file-uploader-server](https://npmjs.com/package/@edsdk/file-uploader-server) and both Flmngr and ImgPen can use it to upload files or save edited images respectively.


## License

BSD license for this example, EdSDK double license for Flmngr.
You can install and test Flmngr in this package for free.