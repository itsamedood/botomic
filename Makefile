.PHONY: test
test:
ifeq ("$(wildcard ./test/)", "")
	mkdir test
else
	rm -r test
	mkdir test
endif
	npm run start
