import Icon from '../icon';

const getIConNode = () => ({
  functional: true,

  render(_, context) {
    const props = {
      attrs: context.props,
    };
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
        <circle
          fill="inherit"
          className="exclamation-circle-filled_svg__st0"
          cx={8}
          cy={8}
          r={8}
        />
        <path
          fill="currentColor"
          d="M8 13.6c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1zM9.8 3.8C9.8 2.8 9 2 8 2s-1.8.8-1.8 1.8v.3l.7 5.3c0 .6.5 1.1 1.1 1.1s1.1-.5 1.1-1.1l.7-5.3v-.3z"
        />
      </svg>
    );
  },
});

const ExclamationCircleFilled = {
  functional: true,

  render(_, context) {
    const filalyProps = {
      props: context.props,
      on: context.listeners,
    };
    return <Icon {...filalyProps} component={getIConNode()} />;
  },
};
export default ExclamationCircleFilled;
