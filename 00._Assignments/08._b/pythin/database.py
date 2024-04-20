from pymongo import MongoClient

# Create a MongoDB client
client = MongoClient("mongodb://admin:Passw0rd!@localhost:27017/")

# Connect to the "StarWars" database
db = client["StarWars"]

# Create "Spaceships" collection and insert data
spaceships = db["Spaceships"]
spaceships_data = [
    { "SpaceshipID": 1, "SpaceshipName": 'Millennium Falcon', "SpaceshipSize": 34 },
    { "SpaceshipID": 2, "SpaceshipName": 'Star Destroyer', "SpaceshipSize": 1600 }
]
spaceships.insert_many(spaceships_data)
print("Spaceships inserted")

# Create "Crew_members" collection and insert data
crew_members = db["Crew_members"]
crew_members_data = [
    { "Crew_membersID": 1, "SpaceshipID": 1, "Name": 'Han Solo', "Age": 35 },
    { "Crew_membersID": 2, "SpaceshipID": 1, "Name": 'Chewbacca', "Age": 200 },
    { "Crew_membersID": 3, "SpaceshipID": 2, "Name": 'Darth Vader', "Age": 45 }
]
crew_members.insert_many(crew_members_data)
print("Crew members inserted")

# Close the connection
client.close()