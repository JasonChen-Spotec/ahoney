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
          d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm6.5 8c0 1.5-.5 2.9-1.4 4L4 2.9C5.1 2 6.5 1.5 8 1.5c3.6 0 6.5 2.9 6.5 6.5zm-13 0c0-1.5.5-2.9 1.4-4l9.1 9.1c-1.1.9-2.5 1.4-4 1.4-3.6 0-6.5-2.9-6.5-6.5z"
        />
      </svg>
    );
  },
});

const CircleCancelOutlined = {
  functional: true,

  render(_, context) {
    const filalyProps = {
      props: context.props,
      on: context.listeners,
    };
    return <Icon {...filalyProps} component={getIConNode()} />;
  },
};
export default CircleCancelOutlined;
