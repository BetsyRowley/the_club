CREATE TABLE "users" (
  "id" serial primary key,
  "username" varchar(80) not null unique,
  "password" varchar(120) not null,
  "first" varchar(40) not null,
  "last" varchar(40) not null,
  "BookClubID" int DEFAULT 1,
  "active" boolean DEFAULT true,
  "user_type" varchar(30) DEFAULT 'member',
  "image" text
);

CREATE TABLE "messages" (
  "MessageID" serial primary key,
  "MemberID" int not null,
  "Message" text not null,
  "TimeStamp" text
);

CREATE TABLE "spotlight" (
  "FeaturedBookID" serial primary key,
  "BookClubID" int DEFAULT 1,
  "title" varchar(200) not null,
  "author" varchar(100),
  "isbn" varchar(20),
  "publishedYear" int,
  "notes" text,
  "selected_by" varchar(100),
  "meeting_date" date,
  "active" boolean DEFAULT true
);



-- Tables Not Yet Created

CREATE TABLE "bookclubs" (
  "BookClubID" serial primary key,
  "Name" varchar(100) not null unique,
  "AdminMemberID" int not null,
  "Active" boolean default true
);

CREATE TABLE "archive" (
  "ArchiveID" serial primary key,
  "FeaturedBookID" int not null
);

CREATE TABLE "nightstand" (
  "NightStandID" serial primary key,
  "MemberID" int not null,
  "Title" varchar(200) not null,
  "Author" varchar(100) not null,
  "Notes" text,
  "Done" boolean DEFAULT false
);

CREATE TABLE "personal_annotation" (
  "NotesID" serial primary key,
  "MemberID" int not null,
  "FeaturedBookID" int not null,
  "Date" timestamp,
  "Type" varchar(25) not null,
  "Note" text
);
