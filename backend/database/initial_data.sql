INSERT INTO client VALUES (
  default,
  'Дмитро',
  'Урин',
  '+380667962610',
  'м. Луцьк, вул. Кравчука 48'
);

INSERT INTO good_type VALUES (
  default,
  'салат'
);

INSERT INTO hall VALUES (
  default,
  'Sky Garden',
  'тут якийсь опис'
);

INSERT INTO good VALUES (
  default,
  1,
  'Грецький салат',
  'одна зі страв, що асоціюється із грецькою кухнею',
  250,
  90,
  '/salats/greek_salat.png'
);

INSERT INTO order_ VALUES (
  default,
  1
);

INSERT INTO good_hall VALUES (
  default,
  1,
  1
);

INSERT INTO order_element VALUES (
  default,
  1,
  1,
  10
);

INSERT INTO sale VALUES (
  default,
  1,
  70
);