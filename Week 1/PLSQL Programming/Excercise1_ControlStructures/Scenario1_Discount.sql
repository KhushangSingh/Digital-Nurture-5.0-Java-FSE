DECLARE
    CURSOR c_elderly_customers IS
        SELECT c.CustomerID, l.LoanID 
        FROM Customers c
        JOIN Loans l ON c.CustomerID = l.CustomerID
        WHERE c.Age > 60;
BEGIN
    FOR rec IN c_elderly_customers LOOP
        UPDATE Loans
        SET InterestRate = InterestRate - 1
        WHERE LoanID = rec.LoanID;
    END LOOP;
    COMMIT;
END;
/