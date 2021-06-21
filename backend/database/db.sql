CREATE TABLE IF NOT EXISTS client (
  id serial NOT NULL,
  name varchar(255) NOT NULL,
  surname varchar(255) NOT NULL,
  phone varchar(255) NOT NULL,
  address text DEFAULT NULL,
  PRIMARY KEY (id),
  UNIQUE(name, surname),
  UNIQUE(phone)
);

CREATE TABLE IF NOT EXISTS good_type (
  id serial NOT NULL,
  name varchar(255) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE(name)
);

CREATE TABLE IF NOT EXISTS hall (
  id serial NOT NULL,
  name varchar(255) NOT NULL,
  description text DEFAULT NULL,
  PRIMARY KEY (id),
  UNIQUE(name)
);

CREATE TABLE IF NOT EXISTS good (
  id serial NOT NULL,
  type_id integer NOT NULL,
  name varchar(255) NOT NULL,
  description text DEFAULT NULL,
  weight integer NOT NULL,
  price integer NOT NULL,
  photo text DEFAULT NULL,
  PRIMARY KEY (id),
  CONSTRAINT good_column_2_good_type_id_foreign FOREIGN KEY (type_id) REFERENCES good_type (id),
  UNIQUE (name),
  UNIQUE (photo)
);

CREATE TABLE IF NOT EXISTS order_ (
  id serial NOT NULL,
  client_id integer NOT NULL,
  hall_id integer NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT order_hall_id_hall_id_foreign FOREIGN KEY (hall_id) REFERENCES hall (id),
  CONSTRAINT order_client_id_client_id_foreign FOREIGN KEY (client_id) REFERENCES client (id)
);

CREATE TABLE IF NOT EXISTS good_hall (
  id serial NOT NULL,
  good_id integer NOT NULL,
  hall_id integer NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT good_hall_good_id_good_id_foreign FOREIGN KEY (good_id) REFERENCES good (id),
  CONSTRAINT good_hall_hall_id_hall_id_foreign FOREIGN KEY (hall_id) REFERENCES hall (id),
  UNIQUE(good_id, hall_id)
);

CREATE TABLE IF NOT EXISTS order_element (
  id serial NOT NULL,
  order_id integer NOT NULL,
  good_id integer NOT NULL,
  quantity integer NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT order_element_order_id_order_id_foreign FOREIGN KEY (order_id) REFERENCES order_ (id),
  CONSTRAINT order_element_good_id_good_id_foreign FOREIGN KEY (good_id) REFERENCES good (id),
  UNIQUE(order_id, good_id)
);

CREATE TABLE IF NOT EXISTS sale (
  id serial NOT NULL,
  good_id integer NOT NULL,
  price integer NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT sale_good_id_good_id_foreign FOREIGN KEY (good_id) REFERENCES good (id),
  UNIQUE(good_id)
);