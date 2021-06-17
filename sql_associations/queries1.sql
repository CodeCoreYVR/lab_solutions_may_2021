SELECT orders.id, SUM(line_items.quantity * line_items.price) FROM line_items 
INNER JOIN orders 
ON line_items.order_id = orders.id
WHERE orders.completed_on BETWEEN '2016-01-01' AND '2016-03-31'
GROUP BY orders.id

--Select product names, product prices and the lowest price they were sold at during the last 20 months.
SELECT * FROM products
INNER JOIN line_items ON line_items.product_id = products.id
INNER JOIN orders ON line_items.order_id = orders.id
-- during the last 20 months => from Oct. 2019 to today
-- BETWEEN xxx AND xxx 
-- WHERE orders.completed_on BETWEEN '2017-10-01' AND '2021-06-16'
WHERE orders.completed_on > NOW() - INTERVAL '40' MONTH
-- order the records
ORDER BY products.price
-- get the lowest 
LIMIT 1