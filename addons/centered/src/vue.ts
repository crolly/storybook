import { makeDecorator } from '@storybook/addons';
import parameters from './parameters';
import styles from './styles';

function centered() {
  const params = (new URL(document.location)).searchParams
  const inDocsView = params.get('viewMode') === 'docs'

  let template
  if (inDocsView) {
    template = '<story/>'
  } else {
    template = `
      <div :style="style">
        <div :style="innerStyle">
          <story/>
        </div>
      </div>
    `
  }

  return {
    template: template,
    data() {
      return styles;
    },
  };
}

export default makeDecorator({
  ...parameters,
  wrapper: centered,
});

if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}
