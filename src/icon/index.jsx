import { insertCss } from 'insert-css';
import styleStr from './utils';

let cssInjectedFlag = false;

const Icon = {
  name: 'icon',
  props: {
    className: String,
    rotate: Number,
    component: Object,
    isInitCss: {
      default: !(typeof XMLHttpRequest === 'undefined'),
    },
    click: Function
  },

  mounted(){
    if (this.isInitCss && !cssInjectedFlag) {
      insertCss(styleStr, {
        prepend: true
      });
      cssInjectedFlag = true;
    }
  },

  methods: {
    handleClick(event) {
      this.$emit('click', event);
    },
  },

  render(){
    const { className, rotate, component: IconNode } = this;

    const svgStyle = rotate
    ? `ms-transform: rotate(${rotate}deg); transform: rotate(${rotate}deg)`
    : undefined;

  const innerSvgProps = {
    'aria-hidden': 'true',
    'focusable': 'false',
    style: svgStyle,
  };

    return (
      <span
        role="img"
        class={["spotecicon", className]}
        onclick={this.handleClick}
      >
        <IconNode {...{ attrs: innerSvgProps }} />
      </span>
    );
  }
}

export default Icon;
