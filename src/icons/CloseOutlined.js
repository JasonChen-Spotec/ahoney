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
          className="close-outlined_svg__st0"
          d="M.014 15.144L15.146.012l.849.848L.863 15.992z"
        />
        <path
          fill="currentColor"
          className="close-outlined_svg__st0"
          d="M15.153 15.986L.02.854.869.005l15.132 15.132z"
        />
      </svg>
    );
  },
});

const CloseOutlined = {
  functional: true,

  render(_, context) {
    const filalyProps = {
      props: context.props,
      on: context.listeners,
    };
    return <Icon {...filalyProps} component={getIConNode()} />;
  },
};
export default CloseOutlined;
