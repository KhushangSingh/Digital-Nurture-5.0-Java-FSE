DECLARE
    CURSOR c_due_loans IS
        SELECT CustomerID, LoanID, DueDate
        FROM Loans
        WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30;
BEGIN
    FOR loan_rec IN c_due_loans LOOP
        -- Simulating sending a message by printing to the console
        DBMS_OUTPUT.PUT_LINE('Reminder: Customer ' || loan_rec.CustomerID || 
                             ', Loan ' || loan_rec.LoanID || 
                             ' is due on ' || TO_CHAR(loan_rec.DueDate, 'YYYY-MM-DD'));
    END LOOP;
END;
/