const Expense = ({ expense }) => {
  return (
    <div className="d-flex gap-3">
      <h4>Expense:</h4>
      <p className="mt-1">${expense}</p>
    </div>
  );
};

export default Expense;
