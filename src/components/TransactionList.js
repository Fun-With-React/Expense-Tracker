const TransactionList = () => {
  return (
    <>
      <div className=" d-flex align-items-center justify-content-between rounded-pill py-1 px-2 my-2 bg-primary">
        <div className="d-flex align-items-center">
          <img src="https://picsum.photos/100" style={{ width: "50px" }} className="  p-1 bg-light rounded-circle" alt="logo" />
          <div className="detail mx-3">
            <p className="m-0 fs-3 lh-1">Starbucks</p>
            <p className="m-0 fs-6 lh-1">Jan 1, 2022</p>
          </div>
        </div>
        <p className="m-0">-$25.00</p>
      </div>
    </>
  );
};

export default TransactionList;
