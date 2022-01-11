const StatisticsList = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className="Statistics__list">
      <p className="Statistics__item">Good: {good}</p>
      <p className="Statistics__item">Neutral: {neutral}</p>
      <p className="Statistics__item">Bad: {bad}</p>
      <p className="Statistics__item">Total: {total}</p>
      <p className="Statistics__item">
        Positive feedback: {positivePercentage}%
      </p>
    </div>
  );
};

export default StatisticsList;
