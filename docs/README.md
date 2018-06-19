# Introduction

Cronhub is a tool to monitor any scheduled task (or let's call it a cron job). It makes it a breeze to keep track of all your cron jobs
in a single dashboard. You can use Cronhub to get alerts when:

1.  Your job doesn't run on schedule
2.  Your jobs run longer than expected

You can choose how you want to get alerts using any of our integrations for your monitor.

<!-- ## How It Works -->

## What is a monitor?

For each job, you need to create a monitor. The schedule of your cron and the created monitor should always match.
For instance, if you have a minutely running job on your server you should create a monitor and set the cron schedule to `* * * * *`.

## What is monitor's ping URL?

When you create a new monitor on Cronhub we generate a unique UUID. The ping URL consists of the that UUID
and the endpoint. For instance, if you only want to monitor the schedule of your cron job then your ping URL will look like this:
```bash
 https://cronhub.io/ping/1f5e3410-254c-11e8-b61d-55875966d031
```
In this example the UUID is `1f5e3410-254c-11e8-b61d-55875966d031` and the endpoint is `/ping`.

You will need to make HTTP requests from your cron job every time it runs. If you want to monitor the running time of the job as well you need to ping twice. At the start of your job and when the job is finished. After receiving the first ping the monitor is set. It will start monitoring your job.

## How does alerting work?
If any of your jobs don't run on schedule or run longer than expected Cronhub will alert you. Currently, you can send alerts via Email, Slack, Webhook and SMS integrations. More integrations are coming soon!
