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
          d="M8.9.3c-.5-.4-1.2-.4-1.7 0L.2 7c-.3.2-.3.6 0 .9.2.3.6.3.9 0l.1-.1v6.9c0 .7.6 1.3 1.3 1.3h3.7v-3.9c0-.5.4-.9.9-.9h1.8c.5 0 .9.4.9.9V16h3.8c.7 0 1.3-.6 1.3-1.3V7.9c.3.3.7.2.9 0 .2-.3.2-.7 0-.9L8.9.3z"
        />
      </svg>
    );
  },
});

const HomeFilled = {
  functional: true,

  render(_, context) {
    const filalyProps = {
      props: context.props,
      on: context.listeners,
    };
    return <Icon {...filalyProps} component={getIConNode()} />;
  },
};
export default HomeFilled;
