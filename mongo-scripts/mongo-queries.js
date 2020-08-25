// Get last date of issue
db.issues.find(
    {},
    {
        creationDate : 1,
        number : 1,
        _id : 0
    }
).sort(
    {
        createdDate : -1
    }
).pretty()

// Get issues of last x days
// x = 55
db.issues.find(
    {
        creationDate : {
            $gte: new Date((new Date().getTime() - (55 * 24 * 60 * 60 * 1000)))
        }
    },

    {
        creationDate : 1,
        number : 1,
        _id : 0
    }
).pretty()

db.issues.find(
    {
        creationDate : {
            $lte: new Date()
        }
    },

    {
        creationDate : 1,
        number : 1,
        _id : 0
    }
).pretty()


db.issues.find(
    {
        "label.name" : "bug"
    }
).pretty()

// Fetch issues with userName
db.issues.find(
    {
        user : "davidism"
    }
).pretty()