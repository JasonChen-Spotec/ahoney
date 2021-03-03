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
          d="M8 0a8 8 0 108 8 8 8 0 00-8-8zM3.79 9.08A1.08 1.08 0 114.87 8a1.08 1.08 0 01-1.08 1.08zm4.14 0A1.08 1.08 0 119 8a1.08 1.08 0 01-1.07 1.08zm4.15 0A1.08 1.08 0 1113.16 8a1.08 1.08 0 01-1.08 1.08z"
        />
      </svg>
    );
  },
});

const PendingFilled = {
  functional: true,

  render(_, context) {
    const filalyProps = {
      props: context.props,
      on: context.listeners,
    };
    return <Icon {...filalyProps} component={getIConNode()} />;
  },
};
export default PendingFilled;