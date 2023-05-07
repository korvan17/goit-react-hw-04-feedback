import { FormFeedback } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <FormFeedback>
      <ul className="buttonList">
        {options.map(val => (
          <li key={val}>
            <button
              name={val}
              className="button-17"
              onClick={onLeaveFeedback}
              type="button"
              width="100"
            >
              {val}
            </button>
          </li>
        ))}
      </ul>
    </FormFeedback>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
