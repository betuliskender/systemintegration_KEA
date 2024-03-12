
# Granular acces 

## Connection

To access the database run below code in powershell

```bash
  sqlcmd -S servername -U username -P password -d database
```

**Connection string**: systemintegration-user-access-new.database.windows.net

**Username**: Zack

**Password**: Z@ck1234

**Database**: SystemIntegratiion

## SQL Commands

**View tables**

SELECT TABLE_NAME
FROM INFORMATION_SCHEMA.TABLES
WHERE TABLE_TYPE = 'BASE TABLE';

**View table**

Try: SELECT * FROM USERS

See what it says.


**View columns**

SELECT COLUMN_NAME
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_NAME =  'Users';

**Update statements**

Try to update the columns

UPDATE Users set Email = 'email@email.dk' where ID = **ID**;

UPDATE Users set ID = 0 where ID = **ID**;