# Airbyte Connector Metadata Service

There are 3 sources of truth as far as connector metadata right now:

1. actual connector source code in the github repo
    - https://github.com/airbytehq/airbyte/tree/master/airbyte-integrations/connectors
    - extracted with [`git2json.js`](https://github.com/airbytehq/airbyte/blob/trygit/airbyte-integrations/connectors/git2json.js) which generates `git2json.json` which we paste over to this project
2. the manually maintained definitions files
    - https://github.com/airbytehq/airbyte/blob/master/airbyte-config/init/src/main/resources/seed/destination_definitions.yaml
    - https://github.com/airbytehq/airbyte/blob/master/airbyte-config/init/src/main/resources/seed/source_definitions.yaml
3. for cloud connectors, the cloud catalog
    - https://storage.googleapis.com/prod-airbyte-cloud-connector-metadata-service/cloud_catalog.json

Our job is to unify them and serve them quickly from a simple RESTful API that is easy to edit, for consumption from docs, UI, and whatever else. 

- For most people, this is a read-only endeavor which means we can make use of simple infrastructure.
- For connector maintainers, we need a simple and fast way to update connector metadata for consumption despite not having one source of truth

This means we need a data pipeline from:

1. 3 sources of truth (external)
2. manually maintained extra info (maintained here)
3. combine 1 and 2 into a `results.json` and serve it from this app/site

## Endpoints

Endpoints want to offer:

- GET `/connectors`
  - [/connectors](/connectors) - the smallest payload of connectors, minus internal connectors
    - listing `['name', 'dateAdded', 'displayName', 'description', 'websiteUrl', 'documentationUrl', 'iconUrl', 'releaseStage', 'connectorType']`
  - [/connectors?internal](/connectors?internal) - small payload of all connectors including internal connectors
  - [/connectors?full](/connectors?full) - just dumping the full `results.json`
- GET `/connector/{connector_name}`
  - return full info for a single connector
  - 404 if unrecognized name

## Future

in future we maybe want to offer:

- search
- update (for now we choose to just update by updating the results.json file, with possibly a google spreadsheet in the loop)