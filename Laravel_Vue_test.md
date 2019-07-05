# API
API сосотоит из 1 Resource контроллера ChargeController. В нем реализованы методы:
 - types
 - index
 - store
 - show
 - update
 - destroy


| Verb | URI | Action |
| ------ | ------ | ------ |
| GET | /api/charges/types | types |
| GET | /api/charges | index |
| POST | /api/charges | store |
| GET | /api/charges/charge | show |
| PUT/PATCH | /api/charges/charge | update |
| DELETE | /api/charges/charge | destroy |



### Installation

```sh
$ composer install
$ php artisan migrate
$ npm install -d
$ npm run prod
$ php artisan serve
```


