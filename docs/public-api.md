# Public API

Cronhub Public API is a REST API that supports basic CRUD operations on top of Cronhub monitors. Our API uses HTTP response codes to indicate any API errors. All API responses are JSON objects.

If you have any ideas or suggestions about the API [let us know on Github](https://github.com/cronhub-app/backlog/issues).

We reserve the right to rate-limit any access key if we feel you're not using the api fairly.

[[toc]]

## Authentication

All API requests must be authenticated by the API key that Cronhub provides. When you [create a new Cronhub account](https://cronhub.io/register) you will get an API key. You can find it on the "Settings" page of the site. Here is an example how it may look `ch_5b73b46baf0c00.55022502`.

**You can authenticate your requests by sending the API key in your HTTP request header. The name of the header should be `X-Api-Key` and the value should be your key.**

## API Endpoints

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
      "last_ping": {
        "date": "2018-08-12 21:01:08.000000",
        "timezone_type": 3,
        "timezone": "UTC"
      },
      "running_time": 1,
      "running_time_unit": "minutes",
      "created_at": {
        "date": "2018-08-12 21:00:51.000000",
        "timezone_type": 3,
        "timezone": "UTC"
      }
    },
    {
      "name": "My Daily Cron Monitor",
      "code": "b5e5e820-9945-11e8-8dd4-23e5bbe40518",
      "schedule": "0 0 * * *",
      "grace_period": 20,
      "timezone": "UTC",
      "status": "up",
      "last_ping": {
        "date": "2018-08-06 07:19:17.000000",
        "timezone_type": 3,
        "timezone": "UTC"
      },
      "running_time": 2,
      "running_time_unit": "minutes",
      "created_at": {
        "date": "2018-08-06 06:55:31.000000",
        "timezone_type": 3,
        "timezone": "UTC"
      }
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
    "last_ping": {
      "date": "2018-08-15 00:27:30.000000",
      "timezone_type": 3,
      "timezone": "UTC"
    },
    "running_time": null,
    "running_time_unit": null,
    "created_at": {
      "date": "2018-08-14 23:21:01.000000",
      "timezone_type": 3,
      "timezone": "UTC"
    }
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
    "last_ping": null,
    "running_time": null,
    "running_time_unit": null,
    "created_at": {
      "date": "2018-08-14 18:23:29.000000",
      "timezone_type": 3,
      "timezone": "UTC"
    }
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
    "last_ping": null,
    "running_time": null,
    "running_time_unit": null,
    "created_at": {
      "date": "2018-08-15 01:03:18.000000",
      "timezone_type": 3,
      "timezone": "UTC"
    }
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
    "last_ping": {
      "date": "2018-08-06 07:19:17.000000",
      "timezone_type": 3,
      "timezone": "UTC"
    },
    "running_time": 2,
    "running_time_unit": "minutes",
    "created_at": {
      "date": "2018-08-06 06:55:31.000000",
      "timezone_type": 3,
      "timezone": "UTC"
    }
  }
}
```
