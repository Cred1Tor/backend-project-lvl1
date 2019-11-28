install:
	npm install

start:
	npx babel-node src/bin/brain-games.js

dry-publish:
	npm publish --dry-run

lint:
	npx eslint .
