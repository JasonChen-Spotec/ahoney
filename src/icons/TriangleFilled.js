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
          d="M1.15 3.37L8 3.35l6.88.06a2.09 2.09 0 01.91.12.64.64 0 010 1l-7.28 8a.78.78 0 01-1 0l-7.28-8a.65.65 0 010-1c.13-.11.37-.16.94-.16z"
        />
      </svg>
    );
  },
});

const TriangleFilled = {
  functional: true,

  render(_, context) {
    const filalyProps = {
      props: context.props,
      on: context.listeners,
    };
    return <Icon {...filalyProps} component={getIConNode()} />;
  },
};
export default TriangleFilled;
