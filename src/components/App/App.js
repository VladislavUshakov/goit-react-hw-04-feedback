import { Statistics } from 'components/Statistics';
import { Section } from 'components/Section';
import { FeedbackOptions } from 'components/FeedbackOptions';

import { useState } from 'react';
import { firstLetterUp } from '../../utils';
import PropTypes from 'prop-types';

export const App = ({
  options = ['good', 'neutral', 'bad'],
  positiveOption: defaultPositiveOption = 'good',
}) => {
  const setStarterOptions = () =>
    options.reduce((acum, option) => {
      acum[option] = 0;
      return acum;
    }, {});

  const [optionsState, setOptionsState] = useState(setStarterOptions);
  const [positiveOption] = useState(defaultPositiveOption);

  const onSetFeedback = e => {
    const { key } = e.currentTarget.dataset;
    setOptionsState(prevState => {
      const prevKey = prevState[key];
      return {
        ...prevState,
        [key]: prevKey + 1,
      };
    });
    e.currentTarget.blur();
  };

  const statisticItems = Object.entries(optionsState).map(item => (
    <li key={item[0]}>
      {firstLetterUp(item[0])}: {item[1]}
    </li>
  ));
  const totalFeedback = Object.values(optionsState).reduce(
    (total, num) => (total += num),
    0
  );
  const positiveFeedback = optionsState[positiveOption];
  const positivePercentage = `${Math.round(
    (positiveFeedback / totalFeedback) * 100
  )}%`;
  const isFeedback = totalFeedback > 0;
  const isPositiveOption = options.includes(positiveOption);

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={options}
        positiveOption={positiveOption}
        onClick={onSetFeedback}
      />
      <Statistics
        statisticItems={statisticItems}
        total={totalFeedback}
        positivePercentage={positivePercentage}
        isFeedback={isFeedback}
        isPositiveOption={isPositiveOption}
      />
    </Section>
  );
};

App.propTypes = {
  options: PropTypes.array,
  positiveOption: PropTypes.string,
};
