---
sidebar_position: 2
---
# Configure your WordPress
Now that you have everything installed, you need to configure your WordPress. As for the installation you have two possibilities:
- You first installed WordPress then the framework separately (so configure your wordpress with [the wp-config.php file](https://wordpress.org/support/article/editing-wp-config-php/))
- You have installed your environment from the boilerplate

## Configure with the boilerplate (use .env files)
Open the .env file in your main folder of your project and edit it :

```dotenv title='wordpress/.env'
APP_ENV=dev
APP_DEBUG=true

DB_NAME=wordpress
DB_USER=root
DB_PASSWORD=root
DB_HOST=127.0.0.1
DB_PREFIX=wp_
DB_CHARSET=utf8

AUTH_KEY='generateme'
SECURE_AUTH_KEY='generateme'
LOGGED_IN_KEY='generateme'
NONCE_KEY='generateme'
AUTH_SALT='generateme'
SECURE_AUTH_SALT='generateme'
LOGGED_IN_SALT='generateme'
NONCE_SALT='generateme'
```

- `APP_ENV`: not use into the framework but you can use it in your code if you want
- `APP_DEBUG`: it's your "WP_DEBUG" constant and permit to disable cache for twig and the container
- `DB_NAME`: set Database Name
- `DB_PASSWORD`: set Database Password
- `DB_HOST`: set Database Host 
- `DB_PREFIX`: set the [table prefix](config-wordpress.md#table-prefix)
- `DB_CHARSET`: set [the charset](config-wordpress.md#database-character-set)

### Table prefix
The $table_prefix is the value placed in the front of your database tables. Change the value if you want to use something other than wp_ for your database prefix. Typically this is changed if you are installing multiple WordPress blogs in the same database, as is done with the multisite feature.
It is possible to have multiple installations in one database if you give each a unique prefix. Keep security in mind if you choose to do this.
Change this with the DB_PREFIX env var.

### Security Keys
You don’t have to remember the keys, just make them long, random and complicated — or better yet, use [the online generator](https://roots.io/salts.html). You can change these at any point in time to invalidate all existing cookies. This does mean that all users will have to login again.
A secret key makes your site harder to successfully attack by adding random elements to the password.

In simple terms, a secret key is a password with elements that make it harder to generate enough options to break through your security barriers. A password like “password” or “test” is simple and easily broken. A random, long password which uses no dictionary words, such as “88a7da62429ba6ad3cb3c76a09641fc” would take a brute force attacker millions of hours to crack. A ‘salt is used to further enhance the security of the generated result.

The four keys are required for the enhanced security. The four salts are recommended, but are not required, because WordPress will generate salts for you if none are provided. They are included in wp-config.php by default for inclusiveness.

### Database character set
DB_CHARSET was made available to allow designation of the database character set (e.g. tis620 for TIS620 Thai) to be used when defining the MySQL database tables.

The default value of utf8 (Unicode UTF-8) is almost always the best option. UTF-8 supports any language, so you typically want to leave DB_CHARSET at utf8 and use the DB_COLLATE value for your language instead.

This example shows utf8 which is considered the WordPress default value:

```dotenv
DB_CHARSET=utf8
```
There usually should be no reason to change the default value of DB_CHARSET. If your blog needs a different character set, please read Character Sets and Collations MySQL Supports for valid DB_CHARSET values. WARNING: Those performing upgrades.

## Next
Now you can [create your first plugin](getting-started/create-plugin.md).
