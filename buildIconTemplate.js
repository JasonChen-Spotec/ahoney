function defaultTemplate(
  { template },
  opts,
  { imports, interfaces, componentName, props, jsx, exports },
) {
  const plugins = ['jsx']

  exports.declaration.name = exports.declaration.name.replace('Svg', '')
  componentName.name = componentName.name.replace('Svg', '')
  const typeScriptTpl = template.smart({ plugins })
  return typeScriptTpl.ast`
  import Icon from '../icon';

    const ${componentName} = {
      render(){
        const getIconNode = (attrs) => {
          const props = { attrs };

          return ${jsx}
        };
        return (<Icon>{getIconNode({
          focusable: "false",
          'aria-hidden': "true"
        })}</Icon>);
      }
    }
    ${exports}
  `
}
module.exports = defaultTemplate
