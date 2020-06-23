install:
	npm install

publish:
	npm publish --dry-run

make lint:
	npx eslint .

gendiff -h:
	node bin/gendiff.js

.PHONY: test gendiff -h make lint publish
