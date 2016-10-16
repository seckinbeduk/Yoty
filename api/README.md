Welcome # Yoty


# **YOTY.Api** 

Patterns in this project:  [Coding Guidelines](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines)
 -  Generic Repository Pattern
 -  Singleton Pattern 
 -  Multi-layer Architecture Pattern


----------
## **Dependencies:** 
 - **NodeJS:** Node.js is an open-source, cross-platform JavaScript runtime environment for developing a diverse variety of tools and applications. 
 - **TypeScript:** TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
 - **ExpressJS:** Fast, unopinionated, minimalist web framework for Node.js 
 - **MongoDB:** MongoDB is an open source database that uses a document-oriented data model.
 - **Mongoose:** Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
 - **GulpJS:** Gulp is a task/build runner for development.

----------
## **Usage:** 

 > $ npm install 

 > $ gulp 

----------
## **Api Definition:** 

> router.get("**/users**", controller.retrieve);

**Method:** Get
**Url:** http://localhost:5000/users
**Return:**  [ 		{"_id":"5803f3bc70512e03c0845a9f", "UserName":"tipek", "Password":"123456", "Name":"Taha", "Surname":"İPEK", "Mail":"ti[at]gmail.com", "UpdatedBy":2,"CreatedBy":3,"__v":0,"Created":"2016-10-17T00:00:00.000Z", "Updated":"2016-10-17T00:44:32.000Z"},
		{"_id":"5803ff30af4d1e1e647acb97", "UserName":"sbeduk", "Password":"123456", "Name":"Seçkin", "Surname":"BEDÜK", "Mail":"mail[at]gmail.com", "UpdatedBy":1,"CreatedBy":1,"__v":0,"Created":"2016-10-17T00:00:00.000Z", "Updated":"2016-10-17T00:00:00.000Z"} 	]

----------

> router.post("**/users"**, controller.create);

**Method:** Post
**Url:** http://localhost:5000/users
**Parameters:** {"UserName": "sbeduk",  "Password": "123456",  "Name": "Seçkin",  "Surname": "BEDÜK",  "Mail": "mail[at]gmail.com",  "UpdatedBy": 1,  "CreatedBy": 1,  "Created": "2016-10-17T00:00:00.000Z",  "Updated": "2016-10-17T00:00:00.000Z"}


----------

> router.put("**/users/:_id**", controller.update);

**Method:** Put
**Url:** http://localhost:5000/users/5803f3bc70512e03c0845a9f
**Parameters:** {"UserName":"tipek", "Password":"123456", "Name":"Taha", "Surname":"İPEK", "Mail":"ti[at]", "UpdatedBy":2,"CreatedBy":3,"__v":0,"Created":"2016-10-17T00:00:00.000Z", "Updated":"2016-10-17T00:44:32.000Z"}


----------


router.get("**/users/:_id**", controller.findById);
**Method:** Get
**Url:** http://localhost:5000/users/5803f3bc70512e03c0845a9f
**Returns:** {"_id":"5803f3bc70512e03c0845a9f", "UserName":"tipek", "Password":"123456", "Name":"Taha", "Surname":"İPEK", "Mail":"ti[at]", "UpdatedBy":2,"CreatedBy":3,"__v":0,"Created":"2016-10-17T00:00:00.000Z", "Updated":"2016-10-17T00:44:32.000Z"}


----------


> router.delete("**/users/:_id**", controller.delete);

Not defined.