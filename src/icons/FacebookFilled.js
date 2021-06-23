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
          d="M14.5 0h-13C.7 0 0 .7 0 1.5v13c0 .8.7 1.5 1.5 1.5H8V9H6V7h2V6c0-1.7 1.3-3 3-3h2v2h-2c-.6 0-1 .4-1 1v1h3l-.5 2H10v7h4.5c.8 0 1.5-.7 1.5-1.5v-13c0-.8-.7-1.5-1.5-1.5z"
        />
      </svg>
    );
  },
});

const FacebookFilled = {
  functional: true,

  render(_, context) {
    const filalyProps = {
      props: context.props,
      on: context.listeners,
    };
    return <Icon {...filalyProps} component={getIConNode()} />;
  },
};
export default FacebookFilled;
