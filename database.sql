CREATE TABLE "bookclubs" (
  "BookClubID" serial primary key,
  "Name" varchar(100) not null,
  "AdminMemberID" int not null,
  "Active" boolean default true
);

CREATE TABLE "members" (
  "MemberID" serial primary key,
  "Email" varchar(80) not null,
  "Password" varchar(120) not null,
  "First" varchar(40) not null,
  "Last" varchar(40) not null,
  "BookClubID" int not null,
  "Active" boolean default true,
  "UserType" varchar(30) not null
);

CREATE TABLE "messages" (
  "MessageID" serial primary key,
  "BookClubID" int not null,
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
