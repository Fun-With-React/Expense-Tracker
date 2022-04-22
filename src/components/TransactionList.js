
import { useSelector } from "react-redux";

const TransactionList = ({ text, money, date }) => {
  const { listExpense } = useSelector((state) => state.expenseSlice);
  const deleteItem = () => {
    
    listExpense.map((item) => {
      return listExpense.splice(item, 1);
    });
  };

  return (
    <>
      <div className=" d-flex align-items-center justify-content-between rounded-pill py-1 px-2 my-2 bg-primary">
        <div className="d-flex align-items-center">
          <img
            src="https://picsum.photos/100"
            style={{ width: "50px" }}
            className="  p-1 bg-light rounded-circle"
            alt="logo"
          />
          <div className="detail mx-3">
            <p className="m-0 fs-3 lh-1">{text}</p>
            <p className="m-0 fs-6 lh-1">{date}</p>
          </div>
        </div>
        <p className="m-0">{money}</p>
        <i
          className="fa-solid fa-trash-can mx-3" onClick={() => deleteItem()}
        ></i>
      </div>
    </>
  );
};

export default TransactionList;
