import Icon from '../icon';

const getIConNode = () => ({
  functional: true,

  render(_, context) {
    const props = {
      attrs: context.props,
    };
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
        <g fill="currentColor">
          <path d="M15.4 2.2h-8c-.7 0-1.4.3-2 .8L.2 8.1c-.4.4-.1 1 .4 1h3.5L8.4 5c.1-.1.3 0 .3.1v1.6c-.1.2.1.3.2.3h3l-1.7 1.6 5.6-5.5c.4-.3.1-.9-.4-.9z" />
          <path d="M15.4 7h-3.5l-4.3 4.2c-.1.1-.3 0-.3-.1V9.5c0-.2-.1-.3-.3-.3H4l1.7-1.6L.2 13c-.4.4-.1 1 .4 1h8c.8 0 1.5-.3 2-.8L15.8 8c.4-.3.1-1-.4-1z" />
        </g>
      </svg>
    );
  },
});

const LightningFilled1 = {
  functional: true,

  render(_, context) {
    const filalyProps = {
      props: context.props,
      on: context.listeners,
    };
    return <Icon {...filalyProps} component={getIConNode()} />;
  },
};
export default LightningFilled1;
