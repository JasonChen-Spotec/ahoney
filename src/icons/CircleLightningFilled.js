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
          d="M8 1a7 7 0 11-7 7 7 7 0 017-7m0-1a8 8 0 108 8 8 8 0 00-8-8z"
        />
        <path
          fill="currentColor"
          d="M10.64 3.14H7.27a.76.76 0 00-.7.45L4.26 8.66h2.51l-1.51 4.52 6.9-6.53H9.28L11 3.71a.37.37 0 00-.36-.57z"
        />
      </svg>
    );
  },
});

const CircleLightningFilled = {
  functional: true,

  render(_, context) {
    const filalyProps = {
      props: context.props,
      on: context.listeners,
    };
    return <Icon {...filalyProps} component={getIConNode()} />;
  },
};
export default CircleLightningFilled;
