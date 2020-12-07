# Lorauna

Lorauna is a web application for the administration of a sauna landscape. The association Sauna Lorrainebad runs several saunas in the Lorrainebad Bern during winter. The app is used to register visitors' entrances and exits and to record temperatures in the sauna.

<img width="500px" src="./assets/screenshot.png" alt="Screenshot" />

## Env config

Running the application requires the following environment variables:

```
REACT_APP_APOLLO_URL=/api
MONGO_URL=mongodb://username:password@hostname.com:port/database
SOURCE_DATABASE_URI="mongodb://username:password@hostname.com:port/database"
TARGET_DATABASENAME="mongodb://username:password@hostname.com:port/database"
```

They can be provided with an [.env file](https://github.com/motdotla/dotenv).

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2020-12-07

### Added
- New uplink integration
- Migrate database
## [1.0.0] - 2019-10-28
### Added
- The lorauna-api project has been integrated into this repository.