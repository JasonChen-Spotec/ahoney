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
          d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1.1 1.4-1.8-.6.4-1.4.7-2.1.8-1.2-1.3-3.3-1.4-4.6-.1-.7.6-1 1.5-1 2.4 0 .3 0 .5.1.7-2.7-.1-5.1-1.3-6.8-3.4-.3.5-.4 1.1-.4 1.6 0 1.1.5 2.1 1.4 2.7C1.6 6.4.5 6.2.5 6c0 1.6 1.2 2.9 2.7 3.2-.3.2-.5.2-.8.2-.2 0-.4 0-.6-.1.4 1.3 1.7 2.3 3.1 2.3-1.2.9-2.6 1.4-4.1 1.4H0c1.5 1 3.2 1.5 5 1.5 5.1.1 9.3-4.1 9.4-9.2V4.7c.6-.4 1.2-1 1.6-1.7z"
        />
      </svg>
    );
  },
});

const TwitterFilled = {
  functional: true,

  render(_, context) {
    const filalyProps = {
      props: context.props,
      on: context.listeners,
    };
    return <Icon {...filalyProps} component={getIConNode()} />;
  },
};
export default TwitterFilled;
