import Icon from '../icon';

const getIConNode = () => ({
  functional: true,

  render(_, context) {
    const props = {
      attrs: context.props,
    };
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
        <rect fill="currentColor" y={5.03} width={4} height={10.97} rx={1.11} />
        <rect fill="currentColor" x={6} width={4} height={16} rx={1.11} />
        <rect
          fill="currentColor"
          x={12}
          y={2.64}
          width={4}
          height={13.36}
          rx={1.11}
        />
      </svg>
    );
  },
});

const SamllBarFilled = {
  functional: true,

  render(_, context) {
    const filalyProps = {
      props: context.props,
      on: context.listeners,
    };
    return <Icon {...filalyProps} component={getIConNode()} />;
  },
};
export default SamllBarFilled;
