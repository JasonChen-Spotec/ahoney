function defaultTemplate(
  { template },
  opts,
  { componentName, jsx, exports },
) {
  const plugins = ['jsx']

  exports.declaration.name = exports.declaration.name.replace('Svg', '')
  componentName.name = componentName.name.replace('Svg', '')
  const typeScriptTpl = template.smart({ plugins })
  return typeScriptTpl.ast`
    import Icon from '../icon';

    const getIConNode = () => ({
      functional: true,
      render(_, context){
        const props = {
          attrs: context.props
        };
        return ${jsx};
      }
    });

    const ${componentName} = {
      functional: true,
      render(_, context) {
        const filalyProps = {
          props: context.props,
          on: context.listeners
        }
        return (
          <Icon
            {...filalyProps}
            component={getIConNode()}
          />
        );
      },
    }
    ${exports}
  `
}
module.exports = defaultTemplate
