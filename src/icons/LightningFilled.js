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
          d="M14.4 6.1c0-.1-.2-.3-.6-.3h-4l1-4.8c0-.3 0-.5-.2-.7-.1-.2-.3-.3-.5-.3-.3 0-.5.1-.6.1-.1 0-.1.1-.1.1L1.7 8.8c-.2.2-.2.4-.1.7.1.1.3.3.7.3h3.6l-2 5.4v.1c0 .1 0 .3.2.6.1 0 .3.1.5.1.1 0 .3 0 .4-.1.1 0 .1-.1.2-.1l9-8.9.1-.1c.1-.1.3-.4.1-.7z"
        />
      </svg>
    );
  },
});

const LightningFilled = {
  functional: true,

  render(_, context) {
    const filalyProps = {
      props: context.props,
      on: context.listeners,
    };
    return <Icon {...filalyProps} component={getIConNode()} />;
  },
};
export default LightningFilled;
