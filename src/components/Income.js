const Income = ({ income }) => {
  return (
    <div className="d-flex gap-3">
      <h4>Income:</h4>
      <p className="mt-1">${income}</p>
    </div>
  );
};

export default Income;
