# How to Ping
In this section, I explain how you can ping Cronhub monitors from your cron jobs. You should ping the monitors by making an HTTP request from your cron job.
If you only want to monitor the schedule of the job then you need to ping only once when your job runs. That's all. If you want to monitor the schedule and the running time you need to make two pings, one when your job starts and one when your job is finished.

Below I have some examples which you may find very handy depending on what programming language you're using for your cron jobs for. I've started with `Crontab` because of most of the scheduled jobs in systems defined with `Crontab`.

## Crontab

Crontab is a UNIX program that helps you to communicate with the cron deamon on a unix based system. The cron daemon is a long-running process that runs commands at specific dates and times. In order to tell cron daemon what commands it should run and when you need crontab entries. 

On your UNIX system, you can run `crontab -l` to display crontab and see if there are any scheduled tasks. Run `crontab -e` to edit the crontab. 

Below we have an example of a crontab entry that you can add to your system's crontab entry. Of course, you will have to replace the script name as well as the ping URL with your own script and the monitor URL.

```bash
* * * * * curl -fsS --retry 3 https://cronhub.io/start/1f5e3410-254c-11e8-b61d-55875966d031; your_script.sh && curl -fsS --retry 3 https://cronhub.io/start/1f5e3410-254c-11e8-b61d-55875966d031
```
::: tip
Please note the difference between `;` and `&&`.

`echo "Hello" ; echo "world"` means run `echo "world"` no matter what the exit status of the previous command echo "Hello".

Whereas in case of echo `"Hello " && echo "world"`, `echo "world"` will only run if the first command (echo "Hello") is a success (i.e. exit status 0).
:::

## PHP

```php
// ping when your job starts
file_get_contents("http://cronhub.io/start/1f5e3410-254c-11e8-b61d-55875966d031");

// your code goes here...

// ping when your job is finished
file_get_contents("http://cronhub.io/finish/1f5e3410-254c-11e8-b61d-55875966d031");
```

## Bash

```bash
#!/bin/bash

# ping when your job starts
curl -fsS --retry 3 http://cronhub.io/start/1f5e3410-254c-11e8-b61d-55875966d031

your_script.sh

# ping when your job is finished
curl -fsS --retry 3 http://cronhub.io/finish/1f5e3410-254c-11e8-b61d-55875966d031
```

## Python

```python
import urllib2

# ping when your job starts
try:
  urllib2.urlopen("http://cronhub.io/start/1f5e3410-254c-11e8-b61d-55875966d031"")
except Exception:
  pass

# your code goes here...

# ping when your job is finished
try:
  urllib2.urlopen("http://cronhub.io/finish/1f5e3410-254c-11e8-b61d-55875966d031"")
except Exception:
  pass
```

## Node

```js
var https = require('https');

// ping when your job starts
https.get("http://cronhub.io/start/1f5e3410-254c-11e8-b61d-55875966d031");

// your code goes here...

// ping when your job is finished
https.get("http://cronhub.io/finish/1f5e3410-254c-11e8-b61d-55875966d031");
```


You probably have noticed that in all above examples we ping the monitor URL when the job starts and when the job is finished. This way Cronhub can monitor your cron job schedule and running time.
