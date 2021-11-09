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
          d="M1.8 9.8C.8 9.8 0 9 0 8s.8-1.8 1.8-1.8S3.6 7 3.6 8s-.8 1.8-1.8 1.8zm6.2 0C7 9.8 6.2 9 6.2 8S7 6.2 8 6.2 9.8 7 9.8 8 9 9.8 8 9.8zm6.2 0c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8S16 7 16 8s-.8 1.8-1.8 1.8z"
        />
      </svg>
    );
  },
});

const BigEllipsisOutlined = {
  functional: true,

  render(_, context) {
    const filalyProps = {
      props: context.props,
      on: context.listeners,
    };
    return <Icon {...filalyProps} component={getIConNode()} />;
  },
};
export default BigEllipsisOutlined;
