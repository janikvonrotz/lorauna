export $(cat .env | xargs)

if [[ $SOURCE_DATBASEHOST && $SOURCE_DATABASENAME ]]
then
    read -r -p "Dump source database: $SOURCE_DATABASENAME ? [y/N]" response
    if [[ "$response" =~ ^([yY][eE][sS]|[yY])+$ ]]
    then
        if [[ $SOURCE_DATABASE_USERNAME && $SOURCE_DATABASE_PASSWORD ]]
        then
            mongodump -h $SOURCE_DATBASEHOST -d $SOURCE_DATABASENAME -u $SOURCE_DATABASE_USERNAME -p $SOURCE_DATABASE_PASSWORD -o ./.dump
        else
            mongodump -h $SOURCE_DATBASEHOST -d $SOURCE_DATABASENAME -o ./.dump
        fi
    fi
fi

if [[ $TARGET_DATBASEHOST && $TARGET_DATABASENAME ]]
then
    read -r -p "Restore target database: $TARGET_DATABASENAME ? [y/N]" response
    if [[ "$response" =~ ^([yY][eE][sS]|[yY])+$ ]]
    then
        if [[ $TARGET_DATABASE_USERNAME && $TARGET_DATABASE_PASSWORD ]]
        then
            mongorestore -h $TARGET_DATBASEHOST -d $TARGET_DATABASENAME -u $TARGET_DATABASE_USERNAME -p $TARGET_DATABASE_PASSWORD ./.dump/$SOURCE_DATABASENAME
        else
            mongorestore -h $TARGET_DATBASEHOST -d $TARGET_DATABASENAME ./.dump/$SOURCE_DATABASENAME
        fi
    fi
fi