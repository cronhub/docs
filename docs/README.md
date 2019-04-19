# Introduction

## What is Cronhub?
Cronhub is a tool to easily monitor your cron jobs (or any scheduled jobs). You can keep track of all your cron jobs in one place. After integrating your job with Cronhub we send you alerts when:

1.  Your job doesn't run on schedule (e.g. you have daily running job but it failed to run on time)
2.  Your job runs longer than expected (e.g. your job should finish within a minute but it took an hour to finish)

Cronhub supports E-mail, Slack, SMS, Webhook and PagerDuty notification channels.

## What is a monitor?

For each job, you need to create a monitor. The schedule of your cron and the created monitor should always match.
For instance, if you have a minutely running cron job on your server you should create a monitor and set the cron schedule to `* * * * *`. Or if you have a job that runs every hour you can create an hourly interval monitor.

## What is monitor's ping URL?

When you create a new monitor on Cronhub we generate a unique UUID for your monitor. The ping URL consists of the that UUID
and the endpoint. For instance, if you only want to monitor the schedule of your cron job then your ping URL will look like this:
```bash
 https://cronhub.io/ping/1f5e3410-254c-11e8-b61d-55875966d031
```
In this example the UUID is `1f5e3410-254c-11e8-b61d-55875966d031` and the endpoint is `/ping`.

You will need to make HTTP requests from your job every time it runs. If you want to monitor the running time of the job as well you need to ping twice. At the start of your job and when the job is finished. After receiving the first ping, your monitor is successfully integrated. It will start monitoring your job and notify you if anything is off.

## How does alerting work?
If any of your jobs don't run on schedule or run longer than expected Cronhub will alert you. Currently, you can send alerts via Email, Slack, SMS, Webhook and PagerDuty.
