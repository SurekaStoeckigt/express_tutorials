There are two common approaches for interacting with a database: 

Using the databases' native query language (e.g. SQL)

Using an Object Data Model ("ODM") or an Object Relational Model ("ORM"). 

An ODM/ORM represents the website's data as JavaScript objects, which are then mapped to the underlying database. Mogoose is an ODM. Mongoose acts as a front end to MongoDB, an open source NoSQL database that uses a document-oriented data model. A “collection” of “documents” in a MongoDB database is analogous to a “table” of “rows” in a relational database.

This ODM and database combination is extremely popular in the Node community, partially because the document storage and query system looks very much like JSON, and is hence familiar to JavaScript developers.

ODM's are often slower because they use translation code to map between objects and the database format, which may not use the most efficient database queries (this is particularly true if the ODM supports different database backends, and must make greater compromises in terms of what database features are supported).

Some ORMs are tied to a specific database, while others provide a database-agnostic backend. The benefit of using an ORM is that programmers can continue to think in terms of JavaScript objects rather than database semantics — this is particularly true if you need to work with different databases (on either the same or different websites). They also provide an obvious place to perform data validation.

The very best performance can be gained by using SQL, or whatever query language is supported by the database. 

Examples: 
Mongoose: Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
Waterline: An ORM extracted from the Express-based Sails web framework. It provides a uniform API for accessing numerous different databases, including Redis, MySQL, LDAP, MongoDB, and Postgres.
Bookshelf: Features both promise-based and traditional callback interfaces, providing transaction support, eager/nested-eager relation loading, polymorphic associations, and support for one-to-one, one-to-many, and many-to-many relations. Works with PostgreSQL, MySQL, and SQLite3.
Objection: Makes it as easy as possible to use the full power of SQL and the underlying database engine (supports SQLite3, Postgres, and MySQL).
Sequelize is a promise-based ORM for Node.js and io.js. It supports the dialects PostgreSQL, MySQL, MariaDB, SQLite, and MSSQL and features solid transaction support, relations, read replication and more.
Node ORM2 is an Object Relationship Manager for NodeJS. It supports MySQL, SQLite, and Progress, helping to work with the database using an object-oriented approach.
GraphQL: Primarily a query language for restful APIs, GraphQL is very popular, and has features available for reading data from databases.