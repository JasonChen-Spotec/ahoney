import Icon from '../icon';

const getIConNode = () => ({
  functional: true,

  render(_, context) {
    const props = {
      attrs: context.props,
    };
    return (
      <svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M16 20.75a.74.74 0 01-.53-.22l-8-8a.75.75 0 010-1.06l8-8a.75.75 0 011.06 1.06L9.06 12l7.47 7.47a.75.75 0 01-.53 1.28z"
          fill="currentColor"
        />
      </svg>
    );
  },
});

const LeftOutlined = {
  functional: true,

  render(_, context) {
    const filalyProps = {
      props: context.props,
      on: context.listeners,
    };
    return <Icon {...filalyProps} component={getIConNode()} />;
  },
};
export default LeftOutlined;
