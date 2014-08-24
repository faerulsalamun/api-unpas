API Universitas Pasundan Node.js
==========

## Components

* MySQL as database
* Express as framework
  * Express session
  * Errorhandler
  * Cookie session

## Example End Point

Fakultas 
 * http://apiunpas.faerul.web.id/fakultas?token=0688e8d637cfd31ef2ec8589e6ffadec
 * http://apiunpas.faerul.web.id/fakultas/:id_fakultas?token=0688e8d637cfd31ef2ec8589e6ffadec

Jurusan
 * http://apiunpas.faerul.web.id/jurusan?token=0688e8d637cfd31ef2ec8589e6ffadec
 * http://apiunpas.faerul.web.id/jurusan/:id_fakultas?token=0688e8d637cfd31ef2ec8589e6ffadec
 * http://apiunpas.faerul.web.id/jurusan/:id_fakultas?token=0688e8d637cfd31ef2ec8589e6ffadec

Biaya
 * http://apiunpas.faerul.web.id/biaya?token=0688e8d637cfd31ef2ec8589e6ffadec

Information
 * http://apiunpas.faerul.web.id/information/info?token=0688e8d637cfd31ef2ec8589e6ffadec

## Token
 You can use another tokens :
  * 0688e8d637cfd31ef2ec8589e6ffadec
  * 270007185d0f4b290ded51f9345a7f29
  * 727bed7419f4350cf7efc5db6bdf97f2

## How to Use

* (Optional) Fork the repo
* Clone the repo to your local

```
$ git clone https://github.com/faerulsalamun/api-unpas.git api-unpas
```

* (Optional) update repo remote url
* Update package.json data (name, description, repository, author, etc)
* Update config/app.js data (database, appname, etc)
* `cd` into project folder and run `npm install` 

```
$ cd api-unpas
$ npm install
```

* Start the server app

```
$ node server.js
```

## Note

All data get from http://www.unpas.ac.id/
