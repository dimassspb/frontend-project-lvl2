[![Maintainability](https://api.codeclimate.com/v1/badges/1225d850a4d2264626a8/maintainability)](https://codeclimate.com/github/dimassspb/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/1225d850a4d2264626a8/test_coverage)](https://codeclimate.com/github/dimassspb/frontend-project-lvl2/test_coverage)
![project2](https://github.com/dimassspb/frontend-project-lvl2/workflows/project2/badge.svg)
[![Build Status](https://travis-ci.org/dimassspb/frontend-project-lvl2.svg?branch=master)](https://travis-ci.org/dimassspb/frontend-project-lvl2)


Utility for searching differences in configuration files

INSTALL DEPENDENCES:
	
	$ make install

LINT CODE:
	
	$ make lint

TESTS:

	$ make test

	$ make test-coverage

[![asciicast](https://asciinema.org/a/uMN8BhH96seiT0zxfgDVAGuvb.svg)](https://asciinema.org/a/uMN8BhH96seiT0zxfgDVAGuvb)

SETUP:
	
	$ npm publish --dry-run

	$ npm link
	

RUN: 

	$ gendiff -h

[![asciicast](https://asciinema.org/a/ASZ92S4leWtTC3TVzUYy6c5jG.svg)](https://asciinema.org/a/ASZ92S4leWtTC3TVzUYy6c5jG)


        $ gendiff before.json after.json

[![asciicast](https://asciinema.org/a/rMZeaxoGDX5QYeFfKa5gGg0oL.svg)](https://asciinema.org/a/rMZeaxoGDX5QYeFfKa5gGg0oL)


        $ gendiff before.yaml after.yaml

[![asciicast](https://asciinema.org/a/rbpXkU2jAnD9ZCMMGdOqvJ07U.svg)](https://asciinema.org/a/rbpXkU2jAnD9ZCMMGdOqvJ07U)


        $ gendiff before.ini after.ini

[![asciicast](https://asciinema.org/a/22cPaeRSjBSXZsFXW20P91P4H.svg)](https://asciinema.org/a/22cPaeRSjBSXZsFXW20P91P4H)


        $ gendiff filepath1.json filepath2.json

[![asciicast](https://asciinema.org/a/b4Ht3Os6SrtnmeO0i1hPFm2ZR.svg)](https://asciinema.org/a/b4Ht3Os6SrtnmeO0i1hPFm2ZR)


        $ gendiff --format plain filepath1.json filepath2.json

[![asciicast](https://asciinema.org/a/ya26HhVKxHIlrfmNIk8Bl6hap.svg)](https://asciinema.org/a/ya26HhVKxHIlrfmNIk8Bl6hap)


        $ gendiff --format json filepath1.json filepath2.json

[![asciicast](https://asciinema.org/a/2DTB4C5x2kpgI13JF8JZdR4QH.svg)](https://asciinema.org/a/2DTB4C5x2kpgI13JF8JZdR4QH)
