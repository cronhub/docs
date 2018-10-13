# How to Ping
The Ping API is an easy way to integrate your scheduled jobs with Cronhub monitors.

In order to integrate your job with a Cronhub monitor, you need to ping from your cron job every time it runs. The ping can be any HTTP request. If you only want to monitor the schedule of your job then you need to ping only once after your job has successfully run. However, If you want to monitor the schedule as well as the running time you need to ping twice, when your job starts and when your job is finished. This way Cronhub will be able to track the running time (or processing time) of your job and alert you if it takes longer than expected to finish.

## Ping API
| Endpoint        | Description  |
| ------------- |:-------------:|
| `https://cronhub.io/ping/<monitor-uuid>`  | Use this endpoint if you only want to monitor the successful runs of your job on schedule. | 
| `https://cronhub.io/start/<monitor-uuid>`      | Use this endpoint to acknowledge the start of your job. Use this endpoint if you additionally want to monitor the running running time of your job.      |  
| `https://cronhub.io/finish/<monitor-uuid>`  | Use this endpoint to acknowledge the finish of your job. Use this endpoint if you additionally want to monitor the running running time of your job.|
| `https://cronhub.io/fail/<monitor-uuid>`  | Use this endpoint to acknowledge the failure of your job. After pinging this endpoint Cronhub will change the state of your monitor to "ALERT" and notify you or your team. |

## Making pings
Below I have some handy examples that you can use for integration. I've started with `Crontab` integration because most of the cron jobs on unix based systems are defined with this program.

## Crontab

Crontab is a UNIX program that helps you to communicate with the cron deamon on a unix based system. The cron daemon is a long-running process that runs commands at specific dates and times. In order to tell cron daemon what commands it should run and when you need crontab entries. 

On your UNIX system, you can run `crontab -l` to display crontab and see if there are any scheduled tasks. Run `crontab -e` to edit the crontab. 

Below we have an example of a crontab entry that you can add to your system's crontab entry. Of course, you will have to replace the script name as well as the ping URL with your own script and the monitor URL.

```bash
* * * * * curl -fsS --retry 3 https://cronhub.io/start/1f5e3410-254c-11e8-b61d-55875966d031; your_script.sh && curl -fsS --retry 3 https://cronhub.io/finish/1f5e3410-254c-11e8-b61d-55875966d031
```
::: tip
Please note the difference between `;` and `&&`.

`echo "Hello" ; echo "world"` means run `echo "world"` no matter what the exit status of the previous command echo "Hello".

Whereas in case of echo `"Hello " && echo "world"`, `echo "world"` will only run if the first command (echo "Hello") is a success (i.e. exit status 0).
:::

## PHP

```php
// ping when your job starts
file_get_contents("https://cronhub.io/start/1f5e3410-254c-11e8-b61d-55875966d031");

// your code goes here...

// ping when your job is finished
file_get_contents("https://cronhub.io/finish/1f5e3410-254c-11e8-b61d-55875966d031");
```

## Bash

```bash
#!/bin/bash

# ping when your job starts
curl -fsS --retry 3 https://cronhub.io/start/1f5e3410-254c-11e8-b61d-55875966d031

your_script.sh

# ping when your job is finished
curl -fsS --retry 3 https://cronhub.io/finish/1f5e3410-254c-11e8-b61d-55875966d031
```

## Python

```python
import urllib2

# ping when your job starts
try:
  urllib2.urlopen("https://cronhub.io/start/1f5e3410-254c-11e8-b61d-55875966d031")
except Exception:
  pass

# your code goes here...

# ping when your job is finished
try:
  urllib2.urlopen("https://cronhub.io/finish/1f5e3410-254c-11e8-b61d-55875966d031")
except Exception:
  pass
```

## Node

```js
var https = require('https');

// ping when your job starts
https.get("https://cronhub.io/start/1f5e3410-254c-11e8-b61d-55875966d031");

// your code goes here...

// ping when your job is finished
https.get("https://cronhub.io/finish/1f5e3410-254c-11e8-b61d-55875966d031");
```

