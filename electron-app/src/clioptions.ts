import program from "commander";

interface Options {
  logLevel: string;
}

function parseOptions(): Options {
  program
    .option("-l, --logLevel <level>", "Log level (debug, silent.. etc)", "info")
    .option("-d, --datadir <dir>", "Defichain data dir", "info")
    .parse(process.argv);
  return program.opts() as Options;
}

export { Options, parseOptions };