import Icon from '../icon';

const getIConNode = () => ({
  functional: true,

  render(_, context) {
    const props = {
      attrs: context.props,
    };
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
        <g fill="currentColor">
          <path d="M14.1 1.3H1.9c-1 0-1.9.8-1.9 1.8v9.8c0 1 .8 1.8 1.9 1.8h12.2c1 0 1.9-.8 1.9-1.8V3.1c0-1-.8-1.8-1.9-1.8zm-12.2.9h12.2c.5 0 1 .4 1 .9v1.5H.9V3.1c0-.5.5-.9 1-.9zm12.2 11.6H1.9c-.5 0-1-.4-1-.9V7.5H15v5.4c.1.5-.4.9-.9.9z" />
          <path d="M5.2 9.7H4.1c-.4 0-.7.3-.7.7v.3c0 .4.3.7.7.7h1.1c.4 0 .7-.3.7-.7v-.3c0-.4-.3-.7-.7-.7z" />
        </g>
      </svg>
    );
  },
});

const CardOutlined = {
  functional: true,

  render(_, context) {
    const filalyProps = {
      props: context.props,
      on: context.listeners,
    };
    return <Icon {...filalyProps} component={getIConNode()} />;
  },
};
export default CardOutlined;
