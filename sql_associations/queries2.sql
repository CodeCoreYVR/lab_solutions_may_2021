-- Calculate how many items in stock we've ever had for each product (remaining or sold) in the database.
-- get the sold amount from line_items table
-- get the remaining_quantity from products table
-- put them together is the total amount
SELECT products.id, (products.remaining_quantity+ SUM(line_items.quantity)) AS total_amount FROM products 
INNER JOIN line_items ON line_items.product_id = products.id
GROUP BY products.id
ORDER BY products.id


-- Find the average order total price for all the orders in the system
-- get the total price of each order 
-- get average of this total price
-- select sth from table 
SELECT AVG(total_price) FROM 
(SELECT orders.id, SUM(line_items.quantity * line_items.price) AS total_price FROM line_items 
INNER JOIN orders 
ON line_items.order_id = orders.id
GROUP BY orders.id) AS total_orders
-- AVG(total_price) => combine all the numbers of this columns together / the row number of this columns = average number