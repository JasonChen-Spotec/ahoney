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
          d="M8 0a8 8 0 108 8 8 8 0 00-8-8zm3.58 11.57a.51.51 0 01-.75 0L8 8.69l-2.9 2.87a.53.53 0 01-.77 0 .53.53 0 010-.75l2.88-2.88-2.75-2.76a.534.534 0 01.76-.75L8 7.18l2.79-2.76a.53.53 0 01.77 0 .53.53 0 010 .75L8.73 8l2.84 2.87a.52.52 0 01.01.7z"
        />
      </svg>
    );
  },
});

const CloseCircleFilled = {
  functional: true,

  render(_, context) {
    const filalyProps = {
      props: context.props,
      on: context.listeners,
    };
    return <Icon {...filalyProps} component={getIConNode()} />;
  },
};
export default CloseCircleFilled;
