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
          d="M12.3 10.1H4.2c-.3 0-.6.2-.6.6 0 .3.2.6.6.6h8.1c.3 0 .6-.2.6-.6-.1-.4-.3-.6-.6-.6zm0-6.5H4.2c-.3 0-.6.2-.6.6s.2.6.6.6h8.1c.3 0 .6-.2.6-.6-.1-.4-.3-.6-.6-.6zm0 3.3H4.2c-.3 0-.6.2-.6.6s.2.5.6.5h8.1c.3 0 .6-.2.6-.6-.1-.3-.3-.5-.6-.5z"
        />
        <path
          fill="currentColor"
          d="M14.2 0h-12C1.5 0 .9.6.9 1.4v13.1c0 .5.3.9.8 1 .1 0 .2.1.3.1.8.2 1.9.4 2.7.4 1.5 0 2.2-.7 3.4-.7s2.2.7 3.6.7c.8 0 1.7-.2 2.4-.4.2 0 .3-.1.5-.1.5-.1.8-.6.8-1V1.2c0-.7-.5-1.2-1.2-1.2zm-2.4 15c-1.6 0-2.3-.8-3.5-.8-1.3.1-1.9.8-3.6.8-.6 0-1.2-.1-1.9-.2-.4-.1-.8-.6-.8-1.1v-12c0-.4.3-.7.8-.7h10.8c.4 0 .8.3.8.8v12c0 .5-.4 1-.9 1.1-.6 0-1.2.1-1.7.1z"
        />
      </svg>
    );
  },
});

const CircleListOutlined = {
  functional: true,

  render(_, context) {
    const filalyProps = {
      props: context.props,
      on: context.listeners,
    };
    return <Icon {...filalyProps} component={getIConNode()} />;
  },
};
export default CircleListOutlined;
