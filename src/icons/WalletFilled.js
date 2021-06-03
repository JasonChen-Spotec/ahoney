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
          d="M14.37 14.68H1.63A1.63 1.63 0 010 13.05V6.86h16v6.19a1.63 1.63 0 01-1.63 1.63zm-4.25-4.23l-.65 2.28h3.92l.61-2.28zM0 3a1.63 1.63 0 011.63-1.68h12.74A1.63 1.63 0 0116 3v1.58H0z"
        />
      </svg>
    );
  },
});

const WalletFilled = {
  functional: true,

  render(_, context) {
    const filalyProps = {
      props: context.props,
      on: context.listeners,
    };
    return <Icon {...filalyProps} component={getIConNode()} />;
  },
};
export default WalletFilled;
