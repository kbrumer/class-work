# Class 13: Mongoose

## Yesterday's MongoDb class
	* Questions or Observations?
	
## Today's Learning Objectives

* Related Models
	* ObjectId
		* Prefer children referencing parent ids
	* Sub Documents
	* `.populate`?
* Augmenting Models with methods
	* static
	* instance
	
## How do I model my relationships

From [6 Rules of Thumb for MongoDB Schema Design: Part 1](http://blog.mongodb.org/post/87200945828/6-rules-of-thumb-for-mongodb-schema-design-part-1)
	
> ### Modeling One-to-Few

> An example of “one-to-few” might be the addresses for a person. This is a good use case for embedding – you’d put the addresses in an array inside of your Person object.

> ### One-to-Many

> An example of “one-to-many” might be parts for a product in a replacement parts ordering system. Each product may have up to several hundred replacement parts, but never more than a couple thousand or so. This is a good use case for referencing – you’d put the ObjectIDs of the parts in an array in product document.

> ### One-to-Squillions

> An example of “one-to-squillions” might be an event logging system that collects log messages for different machines. Any given host could generate enough messages to overflow the 16 MB document size, even if all you stored in the array was the ObjectID. This is the classic use case for “parent-referencing” – you’d have a document for the host, and then store the ObjectID of the host in the documents for the log messages.
