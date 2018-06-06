# Monitors

## States

- `NEW`: Monitor is created but it hasn't received any pings yet.

- `UP`: Monitor is running on schedule and the last ping hasn't exceeded cron scheduled time + grace period.

- `ALERT`: Monitor is not running according to the cron schedule. The last ping was after cron scheduled time + grace period.

- `PAUSED`: Monitor is paused. Monitor will stay paused unless it's manually resumed. It can still receive pings but it will ignore them.

## Alerts

1. We send an alert when your monitor receives the first ping. The state of the monitor goes from `NEW` to `OK`. This means that your monitor is set to monitor your cron job according to the cron job schedule you defined in the monitor.

2. We send an alert when your monitor goes to the `ALERT` state. This happens when the monitor doesn't recieve a ping when it supposed to. This mean that your monitor is **not** running on-schedule.

3. When your monitor recovers. When you monitor recovers the new state is `OK`.
