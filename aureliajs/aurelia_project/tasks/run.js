import gulp from "gulp"
import browserSync from "browser-sync"
import historyApiFallback from "connect-history-api-fallback/lib"
import project from "../aurelia.json"
import { CLIOptions } from "aurelia-cli"
import build from "./build"
import watch from "./watch"

const serve = gulp.series(
  build,
  (done) => {
    browserSync({
      online: false,
      open: CLIOptions.hasFlag("open"),
      port: CLIOptions.getFlagValue("port") || project.platform.port,
      logLevel: "silent",
      server: {
        baseDir: [ project.platform.baseDir ],
        middleware: [
          historyApiFallback(),
          function (req, res, next) {
            res.setHeader("Access-Control-Allow-Origin", "*")
            next()
          },
        ],
      },
    }, function (err, bs) {
      if (err) return done(err)
      const urls = bs.options.get("urls").toJS()
      log(`Application Available At: ${ urls.local }`)
      log(`BrowserSync Available At: ${ urls.ui }`)
      done()
    })
  },
)

function log (message) {
  console.log(message) // eslint-disable-line no-console
}

function reload () {
  log("Refreshing the browser")
  browserSync.reload()
}

const run = gulp.series(
  serve,
  (done) => {
    watch(reload)
    done()
  },
)

export default run
