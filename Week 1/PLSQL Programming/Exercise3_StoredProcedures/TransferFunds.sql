CREATE OR REPLACE PROCEDURE TransferFunds (
    p_from_account IN NUMBER,
    p_to_account IN NUMBER,
    p_amount IN NUMBER
) IS
    v_current_balance NUMBER;
BEGIN
    SELECT Balance INTO v_current_balance
    FROM Accounts
    WHERE AccountID = p_from_account;

    IF v_current_balance >= p_amount THEN
        
        UPDATE Accounts
        SET Balance = Balance - p_amount
        WHERE AccountID = p_from_account;

        UPDATE Accounts
        SET Balance = Balance + p_amount
        WHERE AccountID = p_to_account;

        COMMIT;
        DBMS_OUTPUT.PUT_LINE('Transfer of $' || p_amount || ' successful.');
        
    ELSE
        DBMS_OUTPUT.PUT_LINE('Error: Insufficient funds in source account.');
    END IF;

EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Error: One or both account IDs do not exist.');
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('An unexpected error occurred: ' || SQLERRM);
END TransferFunds;
/
