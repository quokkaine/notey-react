service := notey
version := 0.0.0
# gcloud_proj_id := 
# cluster := 
# gcr-image := 
# root := $(abspath $(shell pwd))
# port := 80

list:
	@grep '^[^#[:space:]].*:' Makefile | grep -v ':=' | grep -v '^\.' | sed 's/:.*//g' | sed 's/://g' | sort

install-dependencies:
	pip install bumpversion
	npm install

format:
	npm run format

dev:
	npm start

bumpversion-patch:
	bumpversion patch --allow-dirty

bumpversion-minor:
	bumpversion minor --allow-dirty

bumpversion-major:
	bumpversion major --allow-dirty
