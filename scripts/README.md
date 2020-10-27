# Lorauna Scripts

## Sync Database

Run `npm run sync-database` or:

```bash
docker-compose up -d
docker exec -it scripts_database_1 bin/bash
cd scripts
./sync-database.sh
```

### Environment Variables

**.env**

```
SOURCE_DATBASEHOST="HOSTNAME:PORT"
SOURCE_DATABASENAME="NAME"
SOURCE_DATABASE_USERNAME="USERNAME"
SOURCE_DATABASE_PASSWORD="PASSWORD"
TARGET_DATBASEHOST="HOSTNAME:PORT"
TARGET_DATABASENAME="NAME"
TARGET_DATABASE_USERNAME="USERNAME"
TARGET_DATABASE_PASSWORD="PASSWORD"
```

## Wordpress Integration

Use the `wordpress-script.js` script for website integration of the Lorauna API.