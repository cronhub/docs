# How to Ping

## Crontab

Crontab is a UNIX program that helps you to communicate with the cron deamon on a unix based system. The cron daemon is a long-running process that runs commands at specific dates and times. In order to tell cron daemon what commands it should run and when you need crontab entries. 

On your UNIX system, you can run `crontab -l` to display crontab and see if there are any scheduled tasks. Run `crontab -e` to edit the crontab. 

Below we have an example of a crontab entry that you can add to your system's crontab entry. Of course, you will have to replace the script name as well as the ping URL with your own script and the monitor URL.

```bash
* * * * * your_script.sh && curl -fsS --retry 3 https://cronhub.io/ping/1f5e3410-254c-11e8-b61d-55875966d031 > /dev/null
```

## PHP

```php
file_get_contents("https://cronhub.io/ping/1f5e3410-254c-11e8-b61d-55875966d031");
```

## Bash

```bash
curl --retry 2 https://cronhub.io/ping/1f5e3410-254c-11e8-b61d-55875966d031
```

## Python

```python
import urllib2 
urllib2.urlopen("https://cronhub.io/ping/1f5e3410-254c-11e8-b61d-55875966d031")
```

## Node

```js
var https = require('https'); 
https.get("https://cronhub.io/ping/1f5e3410-254c-11e8-b61d-55875966d031");
```
