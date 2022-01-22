const sequelize = require("./config");

sequelize
  .query(
    `
 
        drop table if exists reviews;
        drop table if exists messages;
        drop table if exists photos;
        drop table if exists photographers_tags;
        drop table if exists photographers CASCADE;
        drop table if exists tags CASCADE;
        

        create table tags(
            id serial primary key, 
            tag_name varchar(50)
        );

        create table photographers(
            id serial primary key, 
            first_name varchar(50) NOT NULL,
            last_name varchar(50) NOT NULL,
            email varchar(50) UNIQUE NOT NULL ,
            password varchar(50) NOT NULL,
            city varchar(50),
            state varchar(2),
            avatar varchar(255),
            website varchar(100),
            instagram varchar(100),
            facebook varchar(100),
            likes integer DEFAULT 0
        );

        create table photos (
            id serial primary key,
            image_url varchar(255),
            photographer_id integer NOT NULL references photographers(id)
        );
        create table photographers_tags (
            id serial primary key,
            photographer_id integer NOT NULL references photographers(id),
            tag_id integer NOT NULL references tags(id)
        );

        create table messages (
            id serial primary key,
            message text,
            email varchar(50),
            photographer_id integer NOT NULL references photographers(id)
        );

        create table reviews (
            id serial primary key,
            review text,
            title varchar(50),
            name varchar(50),
            photographer_id integer NOT NULL references photographers(id)
        );
INSERT INTO photographers (first_name, last_name, email, password, city, state, avatar, website, instagram, likes)
VALUES ('Vanessa', 'Mazhangara', 'ness@gmail.com', '12345', 'Lansing', 'MI', 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60', 'www.website.com', 'instagram', 0);

INSERT INTO photos (image_url, photographer_id)
VALUES ('https://images.unsplash.com/photo-1595550891383-152fbed0f9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZWRpdG9yaWFsJTIwcG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60', 1);

INSERT INTO reviews (review, title, name, photographer_id)
VALUES ('she was great', 'Quality!', 'Jamie', 1);

INSERT INTO photos (image_url, photographer_id)
VALUES ('https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2VkZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60', 1);

INSERT INTO tags ( tag_name) 
VALUES
('portrait'),
('editorial'),
('maternity'),
('family'),
('event'),
('engagement'),
('wedding');




`
  )
  .then(() => console.log("DB seeded"))
  .catch((err) => console.log(err));
