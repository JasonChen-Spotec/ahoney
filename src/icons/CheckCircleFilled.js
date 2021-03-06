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
          fill="inherit"
          className="check-circle-filled_svg__st0"
          d="M12.5 4.4c-.2-.2-.5-.2-.7 0l-5 5c-.2.2-.5.2-.7 0l-2-2c-.1-.2-.4-.2-.6 0l-.7.8c-.2.2-.2.5 0 .7l3.3 3.3c.2.2.6.2.8 0l6.3-6.3c.2-.2.2-.5 0-.7l-.7-.8z"
        />
      </svg>
    );
  },
});

const CheckCircleFilled = {
  functional: true,

  render(_, context) {
    const filalyProps = {
      props: context.props,
      on: context.listeners,
    };
    return <Icon {...filalyProps} component={getIConNode()} />;
  },
};
export default CheckCircleFilled;
