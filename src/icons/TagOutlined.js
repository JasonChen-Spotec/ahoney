import Icon from '../icon';

const getIConNode = () => ({
  functional: true,

  render(_, context) {
    const props = {
      attrs: context.props,
    };
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
        <circle fill="currentColor" cx={13} cy={3} r={1} />
        <path
          fill="currentColor"
          d="M15 0H9.17a2.1 2.1 0 00-1.5.62l-7.3 7.3a1.27 1.27 0 000 1.79l5.92 5.92a1.26 1.26 0 00.9.37 1.23 1.23 0 00.89-.37l7.3-7.3a2.1 2.1 0 00.62-1.5V1.05A1 1 0 0015 0zM7.23 14.78h-.05L1.22 8.86a.06.06 0 010-.09l2.29-2.29 6.08 5.94zm7.57-7.95a.91.91 0 01-.27.65l-4.09 4.09-6.08-5.94 4.16-4.16a.91.91 0 01.65-.27h5.63z"
        />
      </svg>
    );
  },
});

const TagOutlined = {
  functional: true,

  render(_, context) {
    const filalyProps = {
      props: context.props,
      on: context.listeners,
    };
    return <Icon {...filalyProps} component={getIConNode()} />;
  },
};
export default TagOutlined;
