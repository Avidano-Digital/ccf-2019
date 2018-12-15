<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'ccf_global');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '-pZI8VOURtKw$K9$u!3dm[CWJAjWV)=`8H5ULzikb5>`M^$yO>uBEV(R.p+2ojf7');
define('SECURE_AUTH_KEY',  '66x|Npx)D%gT==5q/q4^_{Q~K@bx5mOT/!dlW^FFkX,#IKIt0z @f5=F)S]^seN-');
define('LOGGED_IN_KEY',    '?l|z.FidbqyP!,d]({c@jha;u4J8o@9gFwXK%n|ur-7:u,/.|/]A?<-}!ihyiVqR');
define('NONCE_KEY',        'cS2(TjH]<u3<=RJz9#R94q(^CQF{Nq1_A!$t&=IbdxjI)#l?+pp]-~4j0 <leH~B');
define('AUTH_SALT',        ' b71#^[nNt~XSc@8bs/;{5)P4xF*~])+$A3{qrzyWd-KsVN~]!?8e,QJ]#G%;_2V');
define('SECURE_AUTH_SALT', '#(&X3s)n~:|g(J9j}mkRNy+i<W[b<LH4gWDi>W|^S6^]=2_QvQq.C$A3?%rk5hIG');
define('LOGGED_IN_SALT',   '}WvXzb&e$~`>u#GJB^Iu2$^BoehKb;;uz_|c$n1snDk8N n`Q:CpdIuWEWNh/iZT');
define('NONCE_SALT',       'EAjKFI/ga?7G2N^RmGf-2ur`7;b~^r[BZ_<sM R.N)j5Jm.w_7YKxBRjg{X(w3+$');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'hr_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
