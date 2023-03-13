create database goodfoodhunting;

create table dishes (
    id serial primary key,
    title text,
    image_url text
);

create table users (
    id serial primary key,
    email text,
    password_digest text
);

insert into dishes (title, image_url) values ('piece of cake', 'https://images.immediate.co.uk/production/volatile/sites/30/2021/03/Unicorn-cake-32e0971.jpg' );
insert into dishes (title, image_url) values ('spaghetti', 'https://foodhub.scene7.com/is/image/woolworthsltdprod/1907-super-quick-spaghetti-and-meatballs:Mobile-1300x1150');

insert into dishes (title, image_url) values ('cake', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZSP0u7NCoK9DC0kwCvbPeFn0-0O7CfmtT6Q&usqp=CAU');

insert into users (email) values ('henry@g.com');
insert into users (email) values ('paul@g.com');

alter table dishes add column user_id integer;