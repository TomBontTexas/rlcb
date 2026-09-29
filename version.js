/* RLCB — single source of truth for the app version.
   Kept in its own tiny file so checkForUpdate() can re-load just this (not the
   whole ~150KB page) to learn whether a newer version has been deployed.
   `var`, not `const` -- this file is re-injected via a fresh <script> tag on
   every check, and re-declaring a const throws.
   Format MAJOR.MINOR.PATCH, two digits each: bump the middle number for new
   features, the last number for bug fixes. Tag each release v<version>. */
var LATEST_APP_VERSION = "0.04.04";
