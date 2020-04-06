# Cronhub CLI
Use Cronhub command-line tool to manage your monitors on Cronhub. Using the CLI, you can list all your monitors, get a specific monitor and easily make pings to your Cronhub monitors.

Very soon, we plan to make the CLI the easiest way to integrate your system cron jobs with Cronhub monitors and keep them in sync. It means less manual work and more automation. Cool eh?

[[toc]]

```sh
Usage: cronhub [OPTIONS] COMMAND [ARGS]...

  A CLI interface that works with Cronhub.

Options:
  --version  Show the version and exit.
  --help     Show this message and exit.

Commands:
  config    Save your Cronhub API key in $HOME/.cronhub.
  monitor   Get the monitor by its UUID.
  monitors  List all your existing monitors.
  ping      Ping the monitor using its UUID.
```
## Install the CLI binary using curl

### Linux
1. Download the latest release
```sh
curl -LO https://s3.amazonaws.com/ch-cli-releases/release/v1.0.0/linux/cronhub
```

2. Make the cronhub binary executable
```sh
chmod +x ./cronhub
```

3. Move the binary in to your PATH.
```sh
sudo mv cronhub /usr/local/bin/cronhub
```

### macOS

1. Download the latest release
```sh
curl -LO https://s3.amazonaws.com/ch-cli-releases/release/v1.0.0/macos/cronhub
```

2. Make the cronhub binary executable
```sh
chmod +x ./cronhub
```

3. Move the binary in to your PATH.
```sh
sudo mv cronhub /usr/local/bin/cronhub
```

## Configure the CLI

After installing the CLI you should configure it using your Cronhub [Public API](https://docs.cronhub.io/public-api.html) key. The key is located in your [account settings](https://cronhub.io/settings/api) page.

Run the following command to permanently save the API key in `$HOME/.cronhub` file. You will
need to run this command only once!

```sh
cronhub config --api-key=<your-api-key>
```
## Contribute
Cronhub CLI is an open source project and accepts contributions. If you use Cronhub and want to contribute then feel free to open a new pull request. You can find the [source code](https://github.com/cronhub-app/cli) on Github.

