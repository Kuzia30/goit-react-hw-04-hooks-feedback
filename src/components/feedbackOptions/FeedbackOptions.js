const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className="Buttons">
    {options.map((option) => (
      <button
        className="Button"
        type="button"
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
