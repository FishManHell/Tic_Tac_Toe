import type { Decorator } from '@storybook/vue3'

export const StyleDecorator: Decorator = (story) => {
  return {
    components: { Story: story() },
    template: `
      <div class="game_wrapper">
        <Story />
      </div>
    `,
  }
}
