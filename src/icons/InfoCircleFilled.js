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
          d="M8 16c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zM8 3.5c-.5 0-1 .4-1 1s.4 1 1 1 1-.4 1-1c0-.5-.4-1-1-1zm1 3.9c0-.4-.4-.8-.8-.8h-.4c-.4 0-.8.4-.8.8v4.7c0 .4.3.8.8.8h.4c.4 0 .8-.3.8-.8V7.4z"
        />
      </svg>
    );
  },
});

const InfoCircleFilled = {
  functional: true,

  render(_, context) {
    const filalyProps = {
      props: context.props,
      on: context.listeners,
    };
    return <Icon {...filalyProps} component={getIConNode()} />;
  },
};
export default InfoCircleFilled;
