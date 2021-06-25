-- To show menu in certain hall

SELECT * FROM good INNER JOIN good_hall ON good.id = good_hall.good_id WHERE hall_id=1;

-- To show order

SELECT * FROM order_element INNER JOIN order_ ON order_.id=order_element.order_id INNER JOIN good_hall ON order_element.good_id=good_hall.id WHERE order_id=1 AND order_.hall_id=good_hall.hall_id;

-- To show all goods of certain type

SELECT * FROM good INNER JOIN good_type ON good.type_id=good_type.id WHERE good.type_id=1;

-- To show all goods of certain type in hall

SELECT * FROM good INNER JOIN good_type ON good.type_id=good_type.id INNER JOIN good_hall ON good.id=good_hall.good_id WHERE good.type_id=1 AND good_hall.hall_id=1;

-- Show all orders

SELECT client_id, order_id, good_id, quantity, type_id, good.name, description, weight, price, photo FROM client INNER JOIN order_ ON client.id=order_.client_id INNER JOIN order_element ON order_element.order_id=order_.id INNER JOIN good ON good.id=order_element.good_id;

-- Show all orders in hall

SELECT client_id, order_id, good_id, quantity, type_id, good.name, description, weight, price, photo, hall_id FROM client INNER JOIN order_ ON client.id=order_.client_id INNER JOIN order_element ON order_element.order_id=order_.id INNER JOIN good ON good.id=order_element.good_id WHERE hall_id=1;

-- Show all goods in hall

SELECT * FROM good INNER JOIN good_hall on good.id=good_hall.good_id WHERE hall_id=1;


