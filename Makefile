install:
	npm install

publish:
	npm publish --dry-run

make lint:
	npx eslint .

watch:
	npx jest --watch

.PHONY: 
