import PropTypes from 'prop-types';

export default function NotFoundPage({ message }) {
  return <h2>{message}</h2>;
}

NotFoundPage.propTypes = {
  message: PropTypes.string,
};
