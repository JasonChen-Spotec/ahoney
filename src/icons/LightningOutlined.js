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
          d="M5.87 9.37H2.73a.59.59 0 01-.54-.8L5.31.38A.57.57 0 015.85 0h5.27a.58.58 0 01.54.81L9.85 5.27h3.42a.59.59 0 01.44 1L5.32 15.8a.59.59 0 01-1-.54l1.55-5.89zm.39-8.2l-2.68 7h3.05a.59.59 0 01.59.59.77.77 0 010 .15l-1.14 4.24L12 6.44H9a.59.59 0 01-.55-.81l1.82-4.46z"
        />
      </svg>
    );
  },
});

const LightningOutlined = {
  functional: true,

  render(_, context) {
    const filalyProps = {
      props: context.props,
      on: context.listeners,
    };
    return <Icon {...filalyProps} component={getIConNode()} />;
  },
};
export default LightningOutlined;
