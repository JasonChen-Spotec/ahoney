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
          d="M12.82 6.25l-.57-.58a.36.36 0 00-.25-.09h-.8a.79.79 0 01-.78-.78V4a.36.36 0 00-.09-.22l-.58-.57a.85.85 0 00-1.21 0L3.18 8.54a.85.85 0 000 1.21l.57.58a.36.36 0 00.22.09h.83a.79.79 0 01.78.78v.8a.36.36 0 00.09.22l.58.57a.85.85 0 001.21 0l5.36-5.36a.85.85 0 000-1.21zM6 8.19a.25.25 0 01-.34 0 .23.23 0 010-.33.24.24 0 01.33 0H6a.25.25 0 010 .34zm.74.74a.24.24 0 01-.33 0l-.06-.06a.23.23 0 010-.33.22.22 0 01.32 0l.06.06a.24.24 0 010 .33zm.74.74a.24.24 0 01-.33 0l-.06-.06a.23.23 0 01.33-.33l.06.06a.24.24 0 010 .33zm.71.71a.24.24 0 01-.33 0 .25.25 0 010-.34.24.24 0 01.32 0 .24.24 0 010 .33z"
        />
        <path
          fill="currentColor"
          d="M8 1a7 7 0 11-7 7 7 7 0 017-7m0-1a8 8 0 108 8 8 8 0 00-8-8z"
        />
      </svg>
    );
  },
});

const CircleCouponFilled = {
  functional: true,

  render(_, context) {
    const filalyProps = {
      props: context.props,
      on: context.listeners,
    };
    return <Icon {...filalyProps} component={getIConNode()} />;
  },
};
export default CircleCouponFilled;
