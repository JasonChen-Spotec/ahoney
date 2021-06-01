import Icon from '../icon';

const getIConNode = () => ({
  functional: true,

  render(_, context) {
    const props = {
      attrs: context.props,
    };
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
        <circle fill="currentColor" cx={8} cy={8} r={8} />
        <path
          className="close-circle-t-filled_svg__cls-1"
          d="M12.05 5.18l-1.21-1.21L8.01 6.8 5.18 3.97 3.97 5.18 6.8 8.01l-2.83 2.83 1.21 1.21 2.83-2.83 2.83 2.83 1.21-1.21-2.83-2.83 2.83-2.83z"
        />
      </svg>
    );
  },
});

const CloseCircleTFilled = {
  functional: true,

  render(_, context) {
    const filalyProps = {
      props: context.props,
      on: context.listeners,
    };
    return <Icon {...filalyProps} component={getIConNode()} />;
  },
};
export default CloseCircleTFilled;
