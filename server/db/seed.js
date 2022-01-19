const sequelize = require('./config');

sequelize.query(`
 
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
            first_name varchar(50),
            last_name varchar(50),
            email varchar(50),
            password varchar(50)
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
INSERT INTO photographers (first_name, last_name, email, password)
VALUES ('Vanessa', 'Mazhangara', 'ness@gmail.com', '12345');

INSERT INTO photos (image_url, photographer_id)
VALUES ('https://images.unsplash.com/photo-1595550891383-152fbed0f9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZWRpdG9yaWFsJTIwcG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60', 1)`)
.then(() => console.log('DB seeded'))
.catch(err => console.log(err))