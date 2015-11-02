# MongoosePOS
Point of Sales system for GNC(Group project)



# Setup
1. [Install Meteor](https://www.meteor.com/install)
2. All you need to do is get a clone of this project and then run meteor to get it going.

You might want to do the Meteor tutorial on their site as well.
Meteor is a platform for developing applications with node.js and MongoDB(They are working on getting PostgreSQL in there too).

# Style
Let's follow the official [Meteor Style Guide.](https://github.com/meteor/meteor/wiki/Meteor-Style-Guide) This doesn't mean much but it keeps the code consistent and easy to read.

# Guides

### Style Guide
1. [Meteor Style Guide.](https://github.com/meteor/meteor/wiki/Meteor-Style-Guide) This will help with clean coding by keeping our code consistent.

### Flow Router
1. [Docs](https://github.com/kadirahq/flow-router/)
2. [Subscriptions](https://kadira.io/academy/meteor-routing-guide/content/subscriptions-and-data-management/with-blaze)

### Github
1. [Branching](https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches)
2. [Pro Git](https://git-scm.com/book/en/v2): A book on git that explains the ins and outs of it. Completely free, able to be viewed and downloaded in multiple file formats. Chapters 1-3 have the most relevant information related to our project.  

# Testing Pull Requests Locally
### (Thanks to Henry)
This checks out the branch you are wanting to test, merge it into master (as though we merged the pull request, but local), and switch to that branch.

    $ git fetch origin
    $ git checkout -b <branch-to-test> origin/<branch-to-test>
    $ git merge master
