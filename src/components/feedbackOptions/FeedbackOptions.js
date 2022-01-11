import PropTypes from "prop-types";

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

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
