import Icon from '../icon';

const getIConNode = () => ({
  functional: true,

  render(_, context) {
    const props = {
      attrs: context.props,
    };
    return (
      <svg
        data-name="\u56FE\u5C42 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        {...props}
      >
        <path
          fill="currentColor"
          d="M14.18 6.55v8H16V16H0v-1.45h1.82v-8H0V5.09h1.91a6.19 6.19 0 0112.18 0H16v1.46zM4.73 7.64v5.81h1.45V7.64zm4.72 0v5.81h1.46V7.64z"
        />
      </svg>
    );
  },
});

const OrganizationFilled = {
  functional: true,

  render(_, context) {
    const filalyProps = {
      props: context.props,
      on: context.listeners,
    };
    return <Icon {...filalyProps} component={getIConNode()} />;
  },
};
export default OrganizationFilled;
