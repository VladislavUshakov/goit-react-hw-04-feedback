import { Statistics } from 'components/Statistics';
import { Section } from 'components/Section';
import { FeedbackOptions } from 'components/FeedbackOptions';

import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onSetFeedback = e => {
    const { key } = e.currentTarget.dataset;
    const actions = {
      good: setGood,
      neutral: setNeutral,
      bad: setBad,
    };

    actions[key](prev => prev + 1);
    e.currentTarget.blur();
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions onClick={onSetFeedback} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </Section>
  );
};
