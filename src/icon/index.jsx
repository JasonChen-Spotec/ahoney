
const Icon = {
  name: 'a-icon',

  props: ['className', 'viewBox', 'spin', 'rotate', 'tabIndex', ],

  render(){
    const { className, viewBox, rotate } = this;

    const svgStyle = rotate
      ? {
        msTransform: `rotate(${rotate}deg)`,
        transform: `rotate(${rotate}deg)`
      }
      : undefined;

    const innerSvgProps = {
      style: svgStyle,
      viewBox
    };

    if (!viewBox) {
      delete innerSvgProps.viewBox;
    }

    return (
      <span
        role="img"
      >
        {this.$slots.default}
      </span>
    );
  }
}

export default Icon;
