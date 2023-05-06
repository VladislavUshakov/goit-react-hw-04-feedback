import PropTypes from 'prop-types';
import { List, Title } from './Statistics.styles';

export const Statistics = ({ good, neutral, bad }) => {
  const totalFeedback = good + neutral + bad;
  const isFeedback = totalFeedback > 0;
  const positivePercentage = `${Math.round((good / totalFeedback) * 100)}%`;

  return (
    <div>
      <Title>Statistics</Title>
      {isFeedback ? (
        <List>
          <li key="good">Good: {good}</li>
          <li key="neutral">Neutral: {neutral}</li>
          <li key="bad">Bad: {bad}</li>
          <li key="total">Total: {totalFeedback}</li>
          <li key="positive">Positive feedback: {positivePercentage}</li>
        </List>
      ) : (
        <p>There is no feedback</p>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
