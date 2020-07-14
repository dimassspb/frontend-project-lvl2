install:
	npm install

publish:
	npm publish --dry-run

make lint:
	npx eslint .

test:
	npm test

test-coverage:
	npm test -- --coverage

.PHONY: test
