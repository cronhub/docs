# Integrations

Cronhub has built-in and third-party tool integrations that play nicely with your monitors. You can think of integrations as notification channels that you can use in your monitors to alert you when an event occurs on Cronhub. Currently, we support Slack, SMS and Webhooks integrations but more integrations will be added in the future. If you're thinking to build a new integration for Cronhub you can [reach out to me](mailto:tigran@cronhub.io).

## Slack
Adding a Slack integration is a straightforward process. In order to integrate Slack with your Cronhub account, you should follow these steps

1. Go to the "Settings" page and click on "Slack" link under the "Integrations" section on the left-sidebar.

2. When you're on the Slack integration page you will see "Add to Slack" button (see the screenshot below). Click on it.

![Add to Slack](./slack-integration-step-1.png)

3. "Add to Slack" button will redirect you to the slack auth page where you can choose the channel you want to get Cronhub alerts to (see the screenshot below).
![Slack auth page](./slack-integration-step-2.png)

After choosing the channel "Authorize" it and you will go back to Cronhub. Now you can see all your connected channels in the list. You can add as many channels as you like.


## PagerDuty
Adding a PagerDuty integration is a multi step process. In order to integrate Pagerduty with your Cronhub account, you should follow these steps

1. Go to the [PagerDuty](https://cronhub.io/settings/integrations/pagerduty) page under your settings.

2. When you're on the PagerDuty integration page you will see "Alert with PagerDuty" green button (see the screenshot below). Click on the button.

![Alert with PagerDuty](./pd-integration-step-1.png)

3. When you click on "Alert with PagerDuty" it will take you to the PagerDuty login screen. You should provide your credentials and click **Authorize integration** to allow Cronhub to integrate with PagerDuty.

![Authorize integration with Cronhub](./pd-integration-step-2.png)

4. After authorizing with your credentials you will see a new screen to configure the Cronhub integration. You can either hook up Cronhub to an existing PagerDuty service, or create a new service. Click **Finish integration** to save your settings and redirect back to Cronhub.

![Configure the Cronhub Integration](./pd-integration-step-3.png)

4. Now when you're back to Cronhub you should see all your PagerDuty service integrations.

![PagerDuty Cronhub Integration](./pd-integration-step-4.png)

5. Cronhub can trigger an incident on PagerDuty when monitors fail and also mark them as resolved when the monitors recover.


If you want to change your PagerDuty integration then you should remove it first and then go over the above steps again.

