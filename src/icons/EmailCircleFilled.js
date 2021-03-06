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
          d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM4.7 4.7h6.7c.5 0 .8.4.8.8L8 7.8 3.8 5.5c0-.4.4-.8.9-.8zm6.6 6.6H4.7c-.5 0-.8-.4-.8-.8v-4L8 8.7h.2l4.1-2.2v4c-.1.4-.5.8-1 .8z"
        />
      </svg>
    );
  },
});

const EmailCircleFilled = {
  functional: true,

  render(_, context) {
    const filalyProps = {
      props: context.props,
      on: context.listeners,
    };
    return <Icon {...filalyProps} component={getIConNode()} />;
  },
};
export default EmailCircleFilled;
