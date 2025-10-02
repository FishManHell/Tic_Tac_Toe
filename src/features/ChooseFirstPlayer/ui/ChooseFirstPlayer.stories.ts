import type { Meta, StoryObj } from '@storybook/vue3-vite'
import ChooseFirstPlayer from './ChooseFirstPlayer.vue'

const meta = {
  title: 'features/ChooseFirstPlayer',
  component: ChooseFirstPlayer,
  tags: ['autodocs'],

  args: {
    chooseFirstPlayer: (player: string) => console.log(player),
  },
} satisfies Meta<typeof ChooseFirstPlayer>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { firstPlayer: '' },
}

export const CrossFirst: Story = {
  args: { firstPlayer: 'X' },
}

export const ZeroFirst: Story = {
  args: { firstPlayer: 'O' },
}
