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
define('DB_NAME', 'eds-test');

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
define('AUTH_KEY',         'z(jn./$8a_~ G`/f(A5N8bu@WDs~,u:v<yM;X.#gV:m`@X7ZNLumeu|6q*yW|,@%');
define('SECURE_AUTH_KEY',  'h[x5(IZ%TdXgnlw5?is0s)Ne^m^sOyd1+>;@rrW#s-STls%+f*bt@$jmMuTKyC8k');
define('LOGGED_IN_KEY',    '5yLb&q6KNMycx:ZmfHx(Ad `Sk.EQ)sFMP1;M>E}jR|UZ0GP:@<tI.M?g|~D4(}B');
define('NONCE_KEY',        'Gq41VA[$&B~U7dFZ*t$;TA:RMp>;Muj1$=+2H!b{>^QEhdWcj=6V7P$@O*SV L-U');
define('AUTH_SALT',        'Pvo{#>uWETB!%qdN8ZV!.>i%8(0!v9K:@#48n-9FEU$Lxn,(OT/=VH$$Y%<Oa(-Y');
define('SECURE_AUTH_SALT', '>vR$kvc:hc {sb:^3#Pivv9XrsxML7KI1,nftA)fO0e2^l%`,@:,3W_ 39L/kHEh');
define('LOGGED_IN_SALT',   'u554S;7WA^D=_koWRq]<`U.[+btyl<EvX&2:cL``M}V<MRMt?7CA,1]g?)Es3;uV');
define('NONCE_SALT',       '6^08@}|2BNn~2m~q#X} 9SZ 7zv],t4.eJ}+IDf}G-ku-Sn=|oN*qx_z~Z,1bvel');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

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

	/* Contact form 7*/
	define( 'WPCF7_AUTOP', false );

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
