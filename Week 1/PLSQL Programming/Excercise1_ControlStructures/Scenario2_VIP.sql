DECLARE
    CURSOR c_customers IS
        SELECT CustomerID, Balance FROM Customers;
BEGIN
    FOR cust_rec IN c_customers LOOP
        IF cust_rec.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = cust_rec.CustomerID;
        END IF;
    END LOOP;
    COMMIT;
END;
/