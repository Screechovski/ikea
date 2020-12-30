USE [FILMOTEKA]
GO

CREATE TABLE ffilms (
id_ffilms int IDENTITY(1,1), CONSTRAINT PK_ffilms_id_ffilms PRIMARY KEY CLUSTERED (id_ffilms)
filmname nvarchar(20),
filmdescription nvarchar(MAX),
filmdaterelise date
)

CREATE TABLE fgenre (
id_fgenre int IDENTITY(1,1), CONSTRAINT PK_fgenre_id_fgenre PRIMARY KEY CLUSTERED (id_fgenre),
genrename nvarchar(20),
genredescription nvarchar(MAX)
)

CREATE TABLE fproducer (
id_fproducer int IDENTITY(1,1), CONSTRAINT PK_fproducer_id_fproducer PRIMARY KEY CLUSTERED (id_fproducer),
producername nvarchar(20),
producersurname nvarchar(20) NOT NULL,
producerpatronymic nvarchar(20),
producerbirthday date
)


CREATE TABLE factor (
id_factor int IDENTITY(1,1), CONSTRAINT PK_factor_id_factor PRIMARY KEY CLUSTERED (id_factor),
actorname nvarchar(20),
actorsurname nvarchar(20) NOT NULL,
actorpatronymic nvarchar(20),
actorbirthday date
)

CREATE TABLE ffilms_fgenre (
id_ffilms_fgenre int IDENTITY(1,1), CONSTRAINT PK_ffilms_fgenre_id_ffilms_fgenre PRIMARY KEY CLUSTERED (id_ffilms_fgenre),
id_ffilms int NOT NULL,
id_fgenre int NOT NULL
)

CREATE TABLE ffilms_fproducer (
id_ffilms_fproducer int IDENTITY(1,1), CONSTRAINT PK_ffilms_fproducer_id_ffilms_fproducer PRIMARY KEY CLUSTERED (id_ffilms_fproducer),
id_ffilms int NOT NULL,
id_fproducer int NOT NULL
)

CREATE TABLE ffilms_factor (
id_ffilms_factor int IDENTITY(1,1), CONSTRAINT PK_ffilms_factor_id_ffilms_factor PRIMARY KEY CLUSTERED (id_ffilms_factor),
id_ffilms int NOT NULL,
id_factor int NOT NULL
)
