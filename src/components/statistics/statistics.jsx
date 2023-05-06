import PropTypes from 'prop-types';
import { List, P, Span } from './statistics.styled';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <List>
      <li>
        <P>
          Good: <Span>{good}</Span>
        </P>
      </li>
      <li>
        <P>
          Neutral: <Span>{neutral}</Span>
        </P>
      </li>
      <li>
        <P>
          Bad: <Span>{bad}</Span>
        </P>
      </li>
      <li>
        <P>
          Total: <Span>{total}</Span>
        </P>
      </li>
      <li>
        <P>
          positive feedback: <Span>{positiveFeedback}%</Span>
        </P>
      </li>
    </List>
  );
};
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positiveFeedback: PropTypes.number,
};