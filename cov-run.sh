#!/bin/bash
cov-build --dir idir --no-command --fs-capture-search .
cov-analyze --dir idir  --disable-default -en SQLI
