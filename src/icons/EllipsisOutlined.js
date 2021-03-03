import Icon from '../icon';

const getIConNode = () => ({
  functional: true,

  render(_, context) {
    const props = {
      attrs: context.props,
    };
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
        <circle fill="currentColor" cx={1.06} cy={8} r={1.06} />
        <circle fill="currentColor" cx={8} cy={8} r={1.06} />
        <circle fill="currentColor" cx={14.94} cy={8} r={1.06} />
      </svg>
    );
  },
});

const EllipsisOutlined = {
  functional: true,

  render(_, context) {
    const filalyProps = {
      props: context.props,
      on: context.listeners,
    };
    return <Icon {...filalyProps} component={getIConNode()} />;
  },
};
export default EllipsisOutlined;
