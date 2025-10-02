import type { Preview } from '@storybook/vue3-vite'
import { StyleDecorator } from '../src/shared/config/decorators'
import "../src/app/styles/index.scss"

const preview: Preview = {
  decorators: [StyleDecorator],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
