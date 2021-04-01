import PropTypes from 'prop-types';

export const UserType = PropTypes.shape({
  name: PropTypes.string.isRequired,
}).isRequired;

export const TodoType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  user: UserType,
});

TodoType.defaultProps = {
  completed: false,
};