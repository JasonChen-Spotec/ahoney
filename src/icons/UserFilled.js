import Icon from '../icon';

const getIConNode = () => ({
  functional: true,

  render(_, context) {
    const props = {
      attrs: context.props,
    };
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
        <path
          fill="currentColor"
          d="M7.83 0a4 4 0 00-4.08 4 4.08 4.08 0 008.16 0 4 4 0 00-4.08-4zm0 0a4 4 0 00-4.08 4 4.08 4.08 0 008.16 0 4 4 0 00-4.08-4zM6.3 9.33A5.22 5.22 0 001 14.5v.33C1 16 3.39 16 6.3 16h3.4c2.91 0 5.3 0 5.3-1.17v-.33a5.22 5.22 0 00-5.3-5.17z"
        />
      </svg>
    );
  },
});

const UserFilled = {
  functional: true,

  render(_, context) {
    const filalyProps = {
      props: context.props,
      on: context.listeners,
    };
    return <Icon {...filalyProps} component={getIConNode()} />;
  },
};
export default UserFilled;
