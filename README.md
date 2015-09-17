# MongoosePOS
Point of Sales system for GNC(Group project)

# Setup 
1. Install Meteor at https://www.meteor.com/install
2. All you need to do is get a clone of this project and then run meteor to get it going. 

You might want to do the Meteor tutorial on their site as well. 
Meteor is a platform for developing applications with node.js and MongoDB(They are working on getting PostgreSQL in there too).

# What I did.
-Created the project and set up the basic file structure.

-Set it up so that if its the first time you run the project on your machine it will import all of the products into a mongo collection automatically.

-Set up a schema using a 3rd party package that takes care of validating objects. We will use this on all of our tables.

-Made a very basic page that just shows all of the products with their price and type. 

# Packages I added
msavin:mongol - Easily look at collections available on current page in the browser. Press ctrl+m to toggle it. (debug only)

npm-container - Allows use of regular node packages. Used with meteorhacks:npm.

meteorhacks:npm - This is why theres a "packages" directory in the project.

dsyko:meteor-node-csv - Allows you to use the node csv package. I used this to read the .csv file.

csats:csv-parse - Allows you to use the node  csv-parse package. Used with previous package to parse the data.

momentjs:moment - Lightweight library for manipulating dates.

aldeed:collection2 - Package that takes care of validating data with schemas when inserting/updating mongo collections. You can also make schemas for normal objects.

Feel free to ask me any questions. 
