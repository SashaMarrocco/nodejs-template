###############################################################################
## DOCKER-COMPOSE
###############################################################################
.PHONY: build up upb upd updb stop

build:
	@docker-compose build

up:
	@docker-compose --compatibility up

upb:
	@docker-compose --compatibility up --build

upd:
	@docker-compose --compatibility up -d

updb:
	@docker-compose --compatibility up -d

stop:
	@docker-compose --compatibility stop


###############################################################################
## DEVELOPMENT STUFF
###############################################################################
.PHONY: debug coverage lint pretty test tdd tddc

debug:
	@docker-compose run -p 127.0.0.1:9229:9229 --rm app yarn run dev:debugger

lint:
	@docker-compose exec app yarn run lint

pretty:
	@docker-compose exec app yarn run pretty

coverage:
	@docker-compose exec app yarn run test:coverage

test:
	@docker-compose exec -e NODE_ENV=test app yarn run test

tdd:
	@docker-compose exec -e NODE_ENV=test app yarn run test:watch

tddc:
	@docker-compose exec -e NODE_ENV=test app yarn run test:watch:coverage