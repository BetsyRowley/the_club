CREATE TABLE "bookclubs" (
  "BookClubID" serial primary key,
  "Name" varchar(100) not null unique,
  "AdminMemberID" int not null,
  "Active" boolean default true
);

CREATE TABLE "members" (
  "MemberID" serial primary key,
  "Email" varchar(80) not null unique,
  "Password" varchar(120) not null,
  "First" varchar(40) not null,
  "Last" varchar(40) not null,
  "BookClubID" int not null,
  "Active" boolean default true,
  "UserType" varchar(30) not null
);

CREATE TABLE "messages" (
  "MessageID" serial primary key,
  "MemberID" int not null,
  "Message" text not null,
  "TimeStamp" timestamp
);

CREATE TABLE "featured_book" (
  "FeaturedBookID" serial primary key,
  "BookClubID" int not null,
  "Title" varchar(200) not null,
  "Author" varchar(100) not null,
  "Plot" text,
  "CoverImage" varchar(200),
  "SelectedByMemberID" int,
  "DateSelected" date,
  "MeetingDate" date,
  "Status" varchar(25) not null
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
