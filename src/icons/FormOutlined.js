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
          d="M12.62 14.06H1.94a.52.52 0 01-.52-.52V4a.52.52 0 01.52-.52h4.89a.52.52 0 01.52.52.52.52 0 01-.52.52H2.46V13h9.64V9.49a.52.52 0 01.52-.49.52.52 0 01.52.52v4a.52.52 0 01-.52.52z"
        />
        <path
          fill="currentColor"
          d="M5.88 11.18a.54.54 0 01-.36-.18.56.56 0 01-.15-.48l.42-2.25A.49.49 0 015.94 8l6.29-6.22a.53.53 0 01.74 0l1.75 1.75a.53.53 0 010 .74l-6.3 6.22a.47.47 0 01-.25.13L6 11.17zm.91-2.52L6.54 10l1.25-.29 5.82-5.75-1-1-5.82 5.7z"
        />
      </svg>
    );
  },
});

const FormOutlined = {
  functional: true,

  render(_, context) {
    const filalyProps = {
      props: context.props,
      on: context.listeners,
    };
    return <Icon {...filalyProps} component={getIConNode()} />;
  },
};
export default FormOutlined;
