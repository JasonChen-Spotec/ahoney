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
          <path d="M15.9.5c0-.1 0-.1 0 0-.1-.1-.1-.1 0 0-.1-.1-.3-.2-.4-.2H13c-.3 0-.5.2-.5.5s.2.5.5.5h1L8 6.5 4 5h-.2c-.1 0-.3.1-.4.2L.1 8.9c-.2.3-.1.6.1.8.2.2.6.2.7-.1l3-3.5 3.9 1.5H8c.1 0 .2-.1.3-.2L14.9 2v1.3c0 .3.2.5.5.5s.6-.3.6-.6V.8c0-.1-.1-.3-.1-.3zM1.1 15.6c-.4 0-.6-.3-.6-.6v-4c0-.4.3-.6.6-.6.4 0 .6.3.6.6v4c0 .3-.3.6-.6.6z" />
          <path d="M4.6 15.6c-.4 0-.6-.3-.6-.6V9c0-.4.3-.6.6-.6.4 0 .6.3.6.6v6c0 .3-.3.6-.6.6zM8.1 15.6c-.4 0-.6-.3-.6-.6v-4.3c0-.4.3-.6.6-.6.4 0 .6.3.6.6V15c0 .3-.3.6-.6.6zM11.6 15.6c-.4 0-.6-.3-.6-.6V8.5c0-.4.3-.6.6-.6.4 0 .6.3.6.6V15c0 .3-.3.6-.6.6zM15 15.6c-.4 0-.6-.3-.6-.6V6.4c0-.4.3-.6.6-.6.4 0 .6.3.6.6V15c0 .3-.3.6-.6.6z" />
        </g>
      </svg>
    );
  },
});

const BarLineOutlined = {
  functional: true,

  render(_, context) {
    const filalyProps = {
      props: context.props,
      on: context.listeners,
    };
    return <Icon {...filalyProps} component={getIConNode()} />;
  },
};
export default BarLineOutlined;
