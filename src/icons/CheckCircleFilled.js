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
          d="M8 0a8 8 0 108 8 8 8 0 00-8-8zm4.59 5.92L7.41 11.1a.73.73 0 01-.88.11l-.14-.11-3-3a.72.72 0 011-1L6.9 9.56l4.66-4.66a.74.74 0 011 0 .72.72 0 01.03 1.02z"
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
