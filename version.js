/* RLCB — single source of truth for the app version.
   Kept in its own tiny file so checkForUpdate() can re-load just this (not the
   whole ~150KB page) to learn whether a newer version has been deployed.
   `var`, not `const` -- this file is re-injected via a fresh <script> tag on
   every check, and re-declaring a const throws.
   Format P.FF.BB = product . feature . bug fix (e.g. 0.05.00):
     product (major) up -> feature and bug fix reset to 00
     feature up         -> bug fix resets to 00
     bug fix up         -> just that number
   Bump with ~/.claude/tools/bump_version.py (product | feature | bugfix | set X.YY.ZZ).
   Tag each release v<version>. */
var LATEST_APP_VERSION = "0.07.01";
