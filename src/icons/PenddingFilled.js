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
        <circle
          fill="inherit"
          className="pendding-filled_svg__cls-1"
          cx={3.72}
          cy={8}
          r={1.06}
        />
        <circle
          fill="inherit"
          className="pendding-filled_svg__cls-1"
          cx={8}
          cy={8}
          r={1.06}
        />
        <circle
          fill="inherit"
          className="pendding-filled_svg__cls-1"
          cx={12.28}
          cy={8}
          r={1.06}
        />
      </svg>
    );
  },
});

const PenddingFilled = {
  functional: true,

  render(_, context) {
    const filalyProps = {
      props: context.props,
      on: context.listeners,
    };
    return <Icon {...filalyProps} component={getIConNode()} />;
  },
};
export default PenddingFilled;
