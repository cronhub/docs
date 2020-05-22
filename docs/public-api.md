# Public API

Cronhub Public API is a REST like API that supports basic CRUD operations on top of Cronhub resources. Our API uses HTTP response codes to indicate any API errors. All API responses are JSON objects.

If you have any ideas or suggestions about the API [let us know on Github](https://github.com/cronhub-app/backlog/issues).

We reserve the right to rate-limit any access key if we feel you're not using the API fairly.

[[toc]]

## Authentication

All API requests must be authenticated by the API key that Cronhub provides. When you [create a new Cronhub account](https://cronhub.io/register) you will get an API key. You can find it on the "Settings" page of the site. Here is an example how it may look `ch_5b73b46baf0c00.55022502`.

**You can authenticate your requests by sending the API key in your HTTP request header. The name of the header should be `X-Api-Key` and the value should be your key.**

You need an active billing plan on Cronhub to work with Cronhub resources.

## :tada: Scheduler API Endpoints
### List all schedulers
`GET https://cronhub.io/api/v1/schedulers` Get the list of all your existing schedulers.

Example Request

```bash
curl --header "X-Api-Key: api-key" https://cronhub.io/api/v1/schedulers
```

Example Response

```json
{
    "schedulers": [
        {
            "id": 1,
            "name": "my scheduler",
            "description": null,
            "interval_schedule_value": null,
            "interval_schedule_rate": null,
            "type": "cron",
            "schedule": "0 0 * * *",
            "timezone": "UTC",
            "status": "paused",
            "url": "https://example.com",
            "http_body": [],
            "http_method": "get",
            "created_at": 1589647300,
            "updated_at": 1589647361
        },
        {
            "id": 1,
            "name": "backup database",
            "description": null,
            "interval_schedule_value": 12,
            "interval_schedule_rate": "hours",
            "type": "interval",
            "schedule": null,
            "timezone": "UTC",
            "status": "active",
            "url": "https://myapiendpoint.com/run_backup",
            "http_body": [],
            "http_method": "get",
            "created_at": 1589631880,
            "updated_at": 1589631880
        },
    ]
}
```

### Get an existing scheduler
`GET https://cronhub.test/api/v1/schedulers/<scheduler-id>` Get an existing scheduler by its unique id.

::: tip
`<scheduler-id>` is the unique id that identifies your scheduler. You can find it if you go to the scheduler's page. It's the number you see in the browser's URL address bar.
:::

Example Request

```bash
curl --header "X-Api-Key: api-key" https://cronhub.io/api/v1/schedulers/1
```

Example Response

```json
{
    "scheduler": {
        "id": 1,
        "name": "run lambda function",
        "description": null,
        "interval_schedule_value": 12,
        "interval_schedule_rate": "hours",
        "type": "interval",
        "schedule": null,
        "timezone": "UTC",
        "status": "paused",
        "url": "https://www.netlify.com/api/run_amazing_function",
        "http_body": [],
        "http_method": "get",
        "created_at": 1589827724,
        "updated_at": 1589828386
    }
}
```

### Create a new scheduler

`POST https://cronhub.io/api/v1/schedulers/create`

Create a new scheduler with the given arguments.

| Argument        | Description           | Is required  |
| ------------- |:-------------:| -----:|
| `name`      | The name of your scheduler. | yes |
| `type`      | The type of your scheduler. Must be `cron` or `interval`.      |   yes |
| `url` | The HTTP target URL. Must be a valid URL.      |    yes |
| `http_method` | The HTTP method       |    yes |
| `http_body` | The HTTP body when the `http_method` is `POST` or `PUT`     |    no |
| `schedule` | The cron expression schedule (e.g. `0 0 * * *`)       |    yes, if `type` is `cron |
| `interval_value` | The interval value. Must be a positive integer.     |    yes, if `type` is `interval` |
| `interval_rate` | The interval rate. Must be `minutes`, `hours` or `days` only.     |   yes, if `type` is `interval` |
| `timezone` | Should be "UTC" for now     |   yes, if `type` is `cron` |

Example request:
```bash
curl -X "POST" --header "X-Api-Key: api-key" \
  -d name='scheduler example' \
  -d type='cron' \
  -d url='https://example-api.com/run_job' \
  -d http_method='get' \
  -d schedule='* * * * *' \
  -d timezone='UTC' \
  https://cronhub.io/api/v1/schedulers/create
```

Example response:
```json
{
    "created": {
        "id": 1,
        "name": "scheduler example'",
        "description": null,
        "interval_schedule_value": null,
        "interval_schedule_rate": null,
        "type": "cron",
        "schedule": "* * * * *",
        "timezone": "UTC",
        "status": "active",
        "url": "https://example-api.com/run_job",
        "http_body": [],
        "http_method": "get",
        "created_at": 1589829544,
        "updated_at": 1589829544
    }
}
```

### Update an existing scheduler
`PUT https://cronhub.io/api/v1/schedulers/<scheduler-id>`


::: tip
`<scheduler-id>` is the unique id that identifies your scheduler. You can find it if you go to the scheduler's page. It's the number you see in the browser's URL address bar.
:::

Update the scheduler with the given arguments.

| Argument        | Description           | Is required  |
| ------------- |:-------------:| -----:|
| `name`      | The name of your scheduler. | yes |
| `type`      | The type of your scheduler. Must be `cron` or `interval`.      |   yes |
| `url` | The HTTP target URL. Must be a valid URL.      |    yes |
| `http_method` | The HTTP method       |    yes |
| `http_body` | The HTTP body when the `http_method` is `POST` or `PUT`     |    no |
| `schedule` | The cron expression schedule (e.g. `0 0 * * *`)       |    yes, if `type` is `cron |
| `interval_value` | The interval value. Must be a positive integer.     |    yes, if `type` is `interval` |
| `interval_rate` | The interval rate. Must be `minutes`, `hours` or `days` only.     |   yes, if `type` is `interval` |
| `timezone` | Should be "UTC" for now     |   yes, if `type` is `cron` |


Example request:
```bash
curl -X "PUT" --header "X-Api-Key: api-key" \
  -d name='scheduler example changed' \
  -d type='cron' \
  -d url='https://example-api.com/run_job' \
  -d http_method='get' \
  -d schedule='0 0 * * *' \
  -d timezone='UTC' \
  https://cronhub.io/api/v1/schedulers/1
```

Example response:
```json
{
    "updated": {
        "id": 1,
        "name": "scheduler example changed'",
        "description": null,
        "interval_schedule_value": null,
        "interval_schedule_rate": null,
        "type": "cron",
        "schedule": "0 0 * * *",
        "timezone": "UTC",
        "status": "active",
        "url": "https://example-api.com/run_job",
        "http_body": [],
        "http_method": "get",
        "created_at": 1589829544,
        "updated_at": 1589829544
    }
}
```

### Delete a scheduler
`DELETE https://cronhub.io/api/v1/schedulers/<scheduler-id>` Delete the scheduler with the given id.


Example request:
```bash
curl -X "DELETE" --header "X-Api-Key: api-key" https://cronhub.io/api/v1/schedulers/1
```

Example response:
```json
{"deleted":true}
```

### Pause a scheduler
`PUT https://cronhub.io/api/v1/schedulers/<scheduler-id>/pause`

Pause the scheduler with the given id. Sets the `status` field to `paused`.


Example request:
```bash
curl -X "PUT" --header "X-Api-Key: api-key" https://cronhub.io/api/v1/schedulers/1/pause
```

Example response:
```json
{
    "paused": {
        "id": 1,
        "name": "my scheduler",
        "description": null,
        "interval_schedule_value": null,
        "interval_schedule_rate": null,
        "type": "cron",
        "schedule": "0 0 * * *",
        "timezone": "UTC",
        "status": "paused",
        "url": "https://exampleurl.com",
        "http_body": [],
        "http_method": "get",
        "created_at": 1589647300,
        "updated_at": 1589829046
    }
}
```

### Resume a scheduler
`PUT https://cronhub.io/api/v1/schedulers/<scheduler-id>/resume`

Resume the scheduler with the given id. Sets the `status` field to `active`.


Example request:
```bash
curl -X "PUT" --header "X-Api-Key: api-key" https://cronhub.io/api/v1/schedulers/1/resume
```

Example response:
```json
{
    "resumed": {
        "id": 1,
        "name": "my scheduler",
        "description": null,
        "interval_schedule_value": null,
        "interval_schedule_rate": null,
        "type": "cron",
        "schedule": "0 0 * * *",
        "timezone": "UTC",
        "status": "active",
        "url": "https://exampleurl.com",
        "http_body": [],
        "http_method": "get",
        "created_at": 1589647300,
        "updated_at": 1589829046
    }
}
```

## Monitor API Endpoints


### List all monitors

`GET https://cronhub.io/api/v1/monitors` Get the list of all your existing monitors.

Example Request

```bash
curl --header "X-Api-Key: api-key" https://cronhub.io/api/v1/monitors
```

Example Response

```json
{
  "success": true,
  "response": [
    {
      "name": "Daily database backup",
      "code": "cbe02bb0-9e72-11e8-ba9d-2bd49279e066",
      "schedule": "0 0 * * *",
      "grace_period": 2,
      "timezone": "UTC",
      "status": "up",
      "last_ping": "2018-08-12T21:01:08+00:00",
      "running_time": 1,
      "running_time_unit": "minutes",
      "created_at": "2018-08-21T21:00:51+00:00",
    },
    {
      "name": "My Daily Cron Monitor",
      "code": "b5e5e820-9945-11e8-8dd4-23e5bbe40518",
      "schedule": "0 0 * * *",
      "grace_period": 20,
      "timezone": "UTC",
      "status": "up",
      "last_ping": "2018-08-12T21:01:08+00:00",
      "running_time": 2,
      "running_time_unit": "minutes",
      "created_at": "2018-08-21T21:00:51+00:00",
    }
  ]
}
```

### Get an existing monitor

`GET https://cronhub.io/api/v1/monitors/<monitor-uuid>` Get an existing monitor by its uuid.

::: tip
`<monitor-uuid>` is the unique id that identifies your monitor. You can find it if you go to the monitor's
"How to Integrate" page.
:::

Example Request

```bash
curl --header "X-Api-Key: api-key" https://cronhub.io/api/v1/monitors/b531e120-a018-11e8-93de-5b0f21d9156d
```

Example Response

```json
{
  "success": true,
  "response": {
    "name": "Cronhub minutely monitor",
    "code": "b531e120-a018-11e8-93de-5b0f21d9156d",
    "schedule": "* * * * *",
    "grace_period": 5,
    "timezone": "UTC",
    "status": "up",
    "last_ping": "2018-08-12T21:01:08+00:00",
    "running_time": null,
    "running_time_unit": null,
    "created_at": "2018-08-21T21:00:51+00:00",
  }
}
```

### Create a new monitor

Create a new monitor with the given arguments.

```bash
curl -X "POST" --header "X-Api-Key: api-key" \
  -d name='Cronhub monitor example' \
  -d schedule='* * * * *' \
  -d grace_period=1 \
  -d timezone=UTC \
  https://cronhub.io/api/v1/monitors
```

| Argument            |                                                        Description                                                         |                                             |
| ------------------- | :------------------------------------------------------------------------------------------------------------------------: | ------------------------------------------: |
| `name`              |                                         The name of the monitor you want to create                                         |                                    Required |
| `schedule`          |                                           The cron schedule (e.g. 0 0 \* \* \*)                                            |                                    Required |
| `timezone`          |                                              Your server timezone (e.g. UTC)                                               |                                    Required |
| `grace_period`      |                               Grace period by minutes. The value should be between 1 and 60.                               |                                    Required |
| `running_time`      |                                The running time threshold. The value should be an integer.                                 |                                    Optional |
| `running_time_unit` | The running time unit. The value should be any of the following time units: `seconds`, `minutes`, `hours`, `days`, `weeks` | Required only if `running_time` is present. |

::: warning
By default we will set `E-mail` as the only notification channel for your monitor. You can always change it on Cronhub.
:::

Example Request

```bash
curl -X "POST" --header "X-Api-Key: ch_5b67f0d9ee835"   -d  name='Cronhub monitor example'   -d  schedule='* * * * *'   -d grace_period=1   -d timezone='UTC' https://cronhub.io/api/v1/monitors
```

Example Response

```json
{
  "success": true,
  "response": {
    "name": "Cronhub monitor example",
    "code": "24b70a00-9fef-11e8-aec8-258e1cb2dfaa",
    "schedule": "* * * * *",
    "grace_period": 1,
    "timezone": "UTC",
    "status": null,
    "running_time": null,
    "running_time_unit": null,
    "created_at": "2018-08-21T21:00:51+00:00",
  }
}
```

### Update an existing monitor

```bash
curl -X "PUT" --header "X-Api-Key: api-key" \
  -d name='Daily Email Report' \
  -d schedule='0 0 * * *' \
  -d grace_period=20 \
  -d timezone=UTC \
  https://cronhub.io/api/v1/monitors/ff722460-a026-11e8-b4f1-f5e50b7346a6
```

| Argument            |                                                        Description                                                         |                                             |
| ------------------- | :------------------------------------------------------------------------------------------------------------------------: | ------------------------------------------: |
| `name`              |                                         The name of the monitor you want to create                                         |                                    Required |
| `schedule`          |                                           The cron schedule (e.g. 0 0 \* \* \*)                                            |                                    Required |
| `timezone`          |                                              Your server timezone (e.g. UTC)                                               |                                    Required |
| `grace_period`      |                               Grace period by minutes. The value should be between 1 and 60.                               |                                    Required |
| `running_time`      |                                The running time threshold. The value should be an integer.                                 |                                    Optional |
| `running_time_unit` | The running time unit. The value should be any of the following time units: `seconds`, `minutes`, `hours`, `days`, `weeks` | Required only if `running_time` is present. |

Example Request

```bash
 curl -X "PUT" --header "X-Api-Key: ch_5b67f0d9ee835"   -d name='Daily Email Report'   -d schedule='0 0 * * *'   -d grace_period=20   -d timezone=UTC   https://cronhub.io/api/v1/monitors/ff722460-a026-11e8-b4f1-f5e50b7346a6
```

Example Response

```json
{
  "success": true,
  "response": {
    "name": "Daily Email Report",
    "code": "ff722460-a026-11e8-b4f1-f5e50b7346a6",
    "schedule": "0 0 * * *",
    "grace_period": 20,
    "timezone": "UTC",
    "status": "new",
    "running_time": null,
    "running_time_unit": null,
    "created_at": "2018-08-21T21:00:51+00:00",
  }
}
```

### Delete a monitor

`DELETE https://cronhub.io/api/v1/monitors/<monitor-uuid>` Delete an existing monitor.

Example request

```bash
curl -X "DELETE" --header "X-Api-Key: api-key" https://cronhub.io/api/v1/monitors/4aa80130-995a-11e8-b107-1992dc48b7c2
```

Example response

```json
{ "success": true, "response": [] }
```

### Pause a monitor

`PUT https://cronhub.io/api/v1/monitors/<monitor-uuid>/pause` Pause an existing monitor.

Example request

```bash
curl -X "PUT" --header "X-Api-Key: api-key" https://cronhub.io/api/v1/monitors/b5e5e820-9945-11e8-8dd4-23e5bbe40518/pause
```

Example response

```json
{
  "success": true,
  "response": {
    "name": "My Daily Cron Monitor",
    "code": "b5e5e820-9945-11e8-8dd4-23e5bbe40518",
    "schedule": "0 0 * * *",
    "timezone": "UTC",
    "status": "paused",
    "last_ping": "2018-08-12T21:01:08+00:00",
    "running_time": 2,
    "running_time_unit": "minutes",
    "created_at": "2018-08-21T21:00:51+00:00",
  }
}
```

