CREATE table swerveItems (
id SERIAL primary key,
title varchar(20),
img varchar(900),
description varchar(300),
category varchar(50),
price DECIMAL(10,2)
);