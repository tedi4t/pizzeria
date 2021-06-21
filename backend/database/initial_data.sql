-- id name surname phone address
INSERT INTO client VALUES (default, 'Дмитро', 'Урин', '+380667962610', 'м. Київ');
INSERT INTO client VALUES (default, 'Петро', 'Іваненко', '+380669967832', 'м. Харків');
INSERT INTO client VALUES (default, 'Василь', 'Степаненко', '+380664562536', 'м. Дніпро');

-- id, name
INSERT INTO good_type VALUES (default, 'салат');
INSERT INTO good_type VALUES (default, 'бургер');
INSERT INTO good_type VALUES (default, 'алкоголь');

-- id, name, description
INSERT INTO hall VALUES (default, 'Sky Garden', 'опис Sky Garden');
INSERT INTO hall VALUES (default, 'Party Bar', 'опис Party Bar');

-- id, type_id, name, description, weight, price, photo
INSERT INTO good VALUES (default, 1, 'Грецький салат', 'опис грецького салату', 250, 90, '/salats/greek_salat.png');
INSERT INTO good VALUES (default, 1, 'Італійський салат', 'опис італійського салату', 180, 120, '/salats/italian_salat.png');
INSERT INTO good VALUES (default, 2, 'Бургер з курячок грудкою', 'опис курячого бургеру', 360, 180, '/burgers/chicken_burger.png');
INSERT INTO good VALUES (default, 2, 'Бургер з рибою', 'опис рибного бургеру', 340, 190, '/burgers/fish_burger.png');
INSERT INTO good VALUES (default, 3, 'Фраголіно Majestico', 'опис фраголіно', 150, 70, '/alcohol/majestico.png');
INSERT INTO good VALUES (default, 3, 'Шот', 'опис шоту', 100, 90, '/alcohol/shot.png');

-- id, client_id, hall_id
INSERT INTO order_ VALUES (default, 1, 1);
INSERT INTO order_ VALUES (default, 2, 2);

-- id, good_id, hall_id
INSERT INTO good_hall VALUES (default, 1, 1);
INSERT INTO good_hall VALUES (default, 2, 1);
INSERT INTO good_hall VALUES (default, 3, 1);
INSERT INTO good_hall VALUES (default, 4, 1);
INSERT INTO good_hall VALUES (default, 1, 2);
INSERT INTO good_hall VALUES (default, 2, 2);
INSERT INTO good_hall VALUES (default, 3, 2);
INSERT INTO good_hall VALUES (default, 4, 2);
INSERT INTO good_hall VALUES (default, 5, 2);
INSERT INTO good_hall VALUES (default, 6, 2);
INSERT INTO good_hall VALUES (default, 7, 2);

-- id, order_id, good_id, quantity
INSERT INTO order_element VALUES (default, 1, 1, 1);
INSERT INTO order_element VALUES (default, 1, 3, 2);
INSERT INTO order_element VALUES (default, 1, 6, 3);
INSERT INTO order_element VALUES (default, 2, 4, 2);
INSERT INTO order_element VALUES (default, 1, 5, 2);

-- id, good_id, price
INSERT INTO sale VALUES (default, 1, 210);
INSERT INTO sale VALUES (default, 3, 300);
INSERT INTO sale VALUES (default, 5, 120);
