CREATE DATABASE StarWars;

USE StarWars;

CREATE TABLE Spaceships (
    SpaceshipID int,
    SpaceshipName varchar(255),
    SpaceshipSize int,
    PRIMARY KEY (SpaceshipID)
);

CREATE TABLE Crew_members (
    Crew_membersID int,
    SpaceshipID int,
    Name varchar(255),
    Age int,
    PRIMARY KEY (Crew_membersID),
    FOREIGN KEY (SpaceshipID) REFERENCES Spaceships(SpaceshipID)
);

-- Insert data into the Spaceships table
INSERT INTO Spaceships (SpaceshipID, SpaceshipName, SpaceshipSize)
VALUES (1, 'Millennium Falcon', 34),
       (2, 'Star Destroyer', 1600);

-- Insert data into the Crew_members table
INSERT INTO Crew_members (Crew_membersID, SpaceshipID, Name, Age)
VALUES (1, 1, 'Han Solo', 35),
       (2, 1, 'Chewbacca', 200),
       (3, 2, 'Darth Vader', 45);