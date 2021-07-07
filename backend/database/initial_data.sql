-- id name surname phone address
INSERT INTO client VALUES (default, 'Дмитро', 'Урин', '+380667962610', 'м. Київ');
INSERT INTO client VALUES (default, 'Петро', 'Іваненко', '+380669967832', 'м. Харків');
INSERT INTO client VALUES (default, 'Василь', 'Степаненко', '+380664562536', 'м. Дніпро');

-- id, name
INSERT INTO good_type VALUES (default, 'салат');
INSERT INTO good_type VALUES (default, 'бургер');
INSERT INTO good_type VALUES (default, 'піца');
INSERT INTO good_type VALUES (default, 'десерт');

-- id, name, description
INSERT INTO hall VALUES (default, 'Sky Garden', 'опис Sky Garden');
INSERT INTO hall VALUES (default, 'Party Bar', 'опис Party Bar');

-- id, type_id, name, description, weight, price, photo
INSERT INTO good VALUES (default, 1, 'грецький салат', 'опис грецького салату', 370, 160, '/salat/greece.jpg');
INSERT INTO good VALUES (default, 1, 'салат з індичкою', 'індичка, запечений перець та листя салату, томати, огірок, соус', 440, 210, '/salat/turkey.jpg');
INSERT INTO good VALUES (default, 1, 'салат з халумі на грилі', 'два види салату, рожевий помідор, авокадо, брокколі, редис, молода картопля, попкорн з кіноа', 250, 230, '/salat/halumi.jpg');
INSERT INTO good VALUES (default, 1, 'салат з качкою', 'качка з овочами та авокадо, чорний рис, заправка на основі соевого соуса, меду і шрірачі', 240, 100, '/salat/duck_salat.jpg');
INSERT INTO good VALUES (default, 2, 'бургер з сиром', 'бріош, соковита котлета з яловичини, чеддер, хрусткий бекон, болгарський перець і соус BBQ', 230, 190, '/burger/chease.jpg');
INSERT INTO good VALUES (default, 2, 'Venue бургер', 'Бріош, котлета з яловичини, американський сир, томати, салат, мариновані огріки та соус', 350, 130, '/burger/shake.jpg');
INSERT INTO good VALUES (default, 3, 'HAVAIIAN', 'піца з ананасом, прошутто, беконом, маринованою цибулею та сиром Скаморца', 380, 190, '/pizza/hawaiian.jpg');
INSERT INTO good VALUES (default, 3, 'MORTADELLA', 'білий соус, моцарелла,пармезан, мортаделла, рікотта з вершками, рублені фісташки', 300, 140, '/pizza/mortadella.jpg');
INSERT INTO good VALUES (default, 3, 'PERA NOSTRA', 'білий соус, блакитний сир, моцарелла, запечена груша, бекон, пармезан', 200, 120, '/pizza/pera_nostra.jpg');
INSERT INTO good VALUES (default, 3, 'POPEYES', 'вершковий соус з пармезаном, шпинат, груби, сир фортіна і прошутто', 370, 110, '/pizza/popeye.jpg');
INSERT INTO good VALUES (default, 3, 'PORNSTAR', 'томати, моцарелла, папероні, рублена котлета з фенхелем, коппа, зрустка цибуля і соус чімічуррі', 430, 100, '/pizza/pornstar.jpg');
INSERT INTO good VALUES (default, 3, 'TUNA MELT', 'томатний соус, грюйер, тунець, томати, конфі, базилік', 330, 210, '/pizza/tuna_melt.jpg');
INSERT INTO good VALUES (default, 4, 'BANANA DREAM', 'вівсяно-мигдалева основа, ганаш з шоколаду, карамеллю та бананами', 240, 160, '/desert/banana_dream.jpg');
INSERT INTO good VALUES (default, 4, 'PAVEL', 'легка меренга з чорничним мармеладом, крем на основі маскарпоне', 270, 220, '/desert/pavel.jpg');
INSERT INTO good VALUES (default, 4, 'REACH PEACH', 'нектаринове пюре з додаванням крему на основі сабайон та вершків', 350, 160, '/desert/reach_peach.jpg');
INSERT INTO good VALUES (default, 4, 'TWINS BERRY TART', 'хрустка крихка крамбл, полуниця з лаймом і ромом, маскарпоне і свіжі ягоди', 420, 200, '/desert/twins_berry_tart.jpg');

-- id, client_id, hall_id
INSERT INTO order_ VALUES (default, 1, 1);
INSERT INTO order_ VALUES (default, 2, 2);

-- id, good_id, hall_id
INSERT INTO good_hall VALUES (default, 1, 1);
INSERT INTO good_hall VALUES (default, 2, 1);
INSERT INTO good_hall VALUES (default, 3, 1);
INSERT INTO good_hall VALUES (default, 4, 1);
INSERT INTO good_hall VALUES (default, 5, 1);
INSERT INTO good_hall VALUES (default, 6, 1);
INSERT INTO good_hall VALUES (default, 7, 1);
INSERT INTO good_hall VALUES (default, 8, 1);
INSERT INTO good_hall VALUES (default, 9, 1);
INSERT INTO good_hall VALUES (default, 10, 1);
INSERT INTO good_hall VALUES (default, 11, 1);
INSERT INTO good_hall VALUES (default, 12, 1);

INSERT INTO good_hall VALUES (default, 1, 2);
INSERT INTO good_hall VALUES (default, 2, 2);
INSERT INTO good_hall VALUES (default, 3, 2);
INSERT INTO good_hall VALUES (default, 4, 2);
INSERT INTO good_hall VALUES (default, 5, 2);
INSERT INTO good_hall VALUES (default, 6, 2);
INSERT INTO good_hall VALUES (default, 13, 2);
INSERT INTO good_hall VALUES (default, 14, 2);
INSERT INTO good_hall VALUES (default, 15, 2);
INSERT INTO good_hall VALUES (default, 16, 2);

-- id, order_id, good_id, quantity
INSERT INTO order_element VALUES (default, 1, 1, 1);
INSERT INTO order_element VALUES (default, 1, 3, 2);
INSERT INTO order_element VALUES (default, 2, 4, 2);

-- id, good_id, price
INSERT INTO sale VALUES (default, 1, 60);
INSERT INTO sale VALUES (default, 3, 120);
