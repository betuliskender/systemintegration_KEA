import { MongoClient } from 'mongodb';

const url = "mongodb://admin:Passw0rd!@localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  const dbo = db.db("StarWars");

  // Create Spaceships collection and insert data
  dbo.collection("Spaceships").insertMany([
    { SpaceshipID: 1, SpaceshipName: 'Millennium Falcon', SpaceshipSize: 34 },
    { SpaceshipID: 2, SpaceshipName: 'Star Destroyer', SpaceshipSize: 1600 }
  ], function(err, res) {
    if (err) throw err;
    console.log("Spaceships inserted");
  });

  // Create Crew_members collection and insert data
  dbo.collection("Crew_members").insertMany([
    { Crew_membersID: 1, SpaceshipID: 1, Name: 'Han Solo', Age: 35 },
    { Crew_membersID: 2, SpaceshipID: 1, Name: 'Chewbacca', Age: 200 },
    { Crew_membersID: 3, SpaceshipID: 2, Name: 'Darth Vader', Age: 45 }
  ], function(err, res) {
    if (err) throw err;
    console.log("Crew members inserted");
    db.close();
  });
});