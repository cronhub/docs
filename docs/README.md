# Introduction

Cronhub is a tool to monitor your cron jobs or any scheduled tasks. It makes it easy to track your cron jobs
and make sure they run on time. If they fail or run off-schedule
Cronhub will alert you. You choose how you want to be alerted.

<!-- ## How It Works -->

## What is a monitor?

For each job, you need to create a monitor. The schedule of your cron and the created monitor should match.
For instance, if you have an hourly running job
on your server you should create a monitor and choose the cron schedule to "Hourly".

## What is a monitor ping URL?

When you create a new monitor on Cronhub we generate a
unique ping URL for you. It looks like this:

```bash
 https://cronhub.io/ping/1f5e3410-254c-11e8-b61d-55875966d031
```

You will need to make an HTTP request (let's call it a ping) from your cron job every time it runs. After
receiving the first ping the monitor is set. It will start monitoring your job.

## How does alerting work?

If any of your jobs don't run when they should, Cronhub alerts you with the alerting channels you have specified in your monitor. Currently, Cronhub supports Email, Slack and SMS integrations. More integrations are coming!
