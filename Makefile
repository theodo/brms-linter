
build-parser:
	@rm -rf build/*
	@./antlr Brms.g4 -o build
	@touch build/.gitignore
