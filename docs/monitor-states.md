# Monitor States & Alerts

## What does each monitor state mean?

- `NEW`: Monitor is created but it hasn't received any pings yet.

- `RUNNING`: Monitor received a `start` ping and it's currently running.

- `UP`: Monitor is running on schedule and the last ping hasn't exceeded cron scheduled time + grace period.

- `ALERT`: Monitor is not running according to the cron schedule or the last ran took longer than expected.

- `PAUSED`: Monitor is paused. Monitor will stay paused unless it's manually resumed. It can still receive pings but it will ignore them.

## When does Cronhub alert you?

1. We send an alert when your monitor receives the first ping. The state of the monitor goes from `NEW` to `OK` or `RUNNING` depending on the type of the ping.  This means that your monitor is set to monitor your cron job according to the cron job schedule and defined running time.

2. We send an alert when your monitor goes to the `ALERT` state. This happens when the monitor doesn't recieve a ping on schedule or it runs longer than it supposed to. You can manually trigger alert by hitting `/fail` endpoint.

3. When your monitor recovers. When your monitor recovers the new state is `OK`.
