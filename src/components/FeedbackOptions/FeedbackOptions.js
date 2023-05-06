import PropTypes from 'prop-types';
import { Button, GoodBtn, OptionsList } from './FeedbackOptions.styles';

export const FeedbackOptions = ({ onClick }) => {
  return (
    <OptionsList>
      <li key="good">
        <GoodBtn onClick={onClick} type="button" data-key="good">
          Good
        </GoodBtn>
      </li>
      <li key="neutral">
        <Button onClick={onClick} type="button" data-key="neutral">
          Neutral
        </Button>
      </li>
      <li key="bad">
        <Button onClick={onClick} type="button" data-key="bad">
          Bad
        </Button>
      </li>
    </OptionsList>
  );
};

FeedbackOptions.propTypes = {
  onClick: PropTypes.func.isRequired,
};
