## PLEASE READ ME, OR YOU'RE GOING TO HAVE A BAD TIME DEPLOYING

Powered by zeit

In order to host your files under root, you must have this in package.json:
### `"homepage": "http://kjan95129.github.io/"`

With this, when a CNAME is used, the files can be served from the ROOT directory of the CNAME.
If homepage is not specified, or is something like this:
### `"homepage": "http://kjan95129.github.io/portfolio"`

All files under the CNAME will be served under http://kevinjan.me/portfolio
By default, index.html will not care for the project name, so a 404 will be returned
on all of the build files if this is the case.

Not 100% sure, but I believe the CNAME file circumvents the need to manually
write the custom domain. I've tried too many things and I don't remember whether
or not that was manually done. This is the only unknown as of now.

Don't spend another four hours trying to debug this, read this please.
