
build-parser:
	@rm -rf build/*
	@./antlr -Dlanguage=JavaScript Brms.g4 -o build
	@touch build/.gitignore