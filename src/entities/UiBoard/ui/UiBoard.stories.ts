import type { Meta, StoryObj } from '@storybook/vue3-vite'
import UiBoard from './UiBoard.vue'

const meta = {
  title: 'entities/UiBoard',
  component: UiBoard,
  tags: ['autodocs'],
} satisfies Meta<typeof UiBoard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    board: Array(9).fill(''),
  },
}

export const Cross: Story = {
  args: {
    board: Array(9).fill('X'),
  },
}

export const Zero: Story = {
  args: {
    board: Array(9).fill('O'),
  },
}

export const Random: Story = {
  args: {
    board: Array(9)
      .fill('')
      .map(() => (Math.random() < 0.5 ? 'X' : 'O')),
  },
}
