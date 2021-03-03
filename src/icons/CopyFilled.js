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
          d="M10.6 11.4c.4 0 .8-.4.8-.8V.8c0-.4-.4-.8-.8-.8H.8C.4 0 0 .4 0 .8v9.8c0 .4.4.8.8.8h9.8z"
        />
        <path
          fill="currentColor"
          d="M15.2 4.6h-2.6v7.1c0 .5-.4.9-.9.9H4.6v2.6c0 .4.4.8.8.8h9.8c.4 0 .8-.4.8-.8V5.4c0-.5-.4-.8-.8-.8z"
        />
      </svg>
    );
  },
});

const CopyFilled = {
  functional: true,

  render(_, context) {
    const filalyProps = {
      props: context.props,
      on: context.listeners,
    };
    return <Icon {...filalyProps} component={getIConNode()} />;
  },
};
export default CopyFilled;
