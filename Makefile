init:
	cp -p src/portweb/.env.example src/portweb/.env
	mkdir -p ./src/portweb/vendor && chmod -R 777 ./src/portweb/vendor
	make up
	make migrate
	make npm

up:
	docker-compose up -d --build
	chmod -R 777 ./src/portweb/storage ./src/portweb/bootstrap/cache
	chmod -R 666 ./src/portweb/.env
	docker-compose exec laravel /bin/ash -c "composer install"
	docker-compose exec laravel /bin/ash -c "php artisan config:clear"
	docker-compose exec laravel /bin/ash -c "php artisan key:generate"
	docker-compose exec laravel /bin/ash -c "composer dump-autoload"

update:
	docker-compose down
	make up

clean:
	docker-compose down
	rm -rf docker/data

migrate:
	docker-compose exec laravel /bin/ash -c "php artisan migrate"
	docker-compose exec laravel /bin/ash -c "php artisan db:seed"

dbRefresh:
	docker-compose exec laravel /bin/ash -c " php artisan migrate:fresh --seed"

npm:
	cd ./src/portweb/ && npm install && npm run dev && cd ../../
	cd ./static/ && npm install && npm run build && cd ../
