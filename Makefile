install:
	npm install

brain-even:
	npx babel-node src/bin/brain-even.js

brain-prime:
	npx babel-node src/bin/brain-prime.js

brain-calc:
	npx babel-node src/bin/brain-calc.js

brain-gcd:
	npx babel-node src/bin/brain-gcd.js

brain-progression:
	npx babel-node src/bin/brain-progression.js

dry-publish:
	npm publish --dry-run

lint:
	npx eslint .
