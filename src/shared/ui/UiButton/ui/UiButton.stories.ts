import type { Meta, StoryObj } from '@storybook/vue3-vite'
import UiButton from './UiButton.vue'
import { BtnMods } from '@/shared/ui/UiButton'

const meta = {
  title: 'shared/UiButton',
  component: UiButton,
  tags: ['autodocs'],
} satisfies Meta<typeof UiButton>

export default meta
type Story = StoryObj<typeof meta>

export const Start: Story = {
  args: {
    mod: BtnMods.START,
  },

  render: (args) => ({
    components: { UiButton },
    setup() {
      return { args }
    },
    template: `<UiButton v-bind="args">Start</UiButton>`,
  }),
}

export const CROSS: Story = {
  args: {
    mod: BtnMods.CROSS,
  },
  render: (args) => ({
    components: { UiButton },
    setup() {
      return { args }
    },
    template: `<UiButton v-bind="args">X</UiButton>`,
  }),
}

export const Zero: Story = {
  args: {
    mod: BtnMods.ZERO,
  },
  render: (args) => ({
    components: { UiButton },
    setup() {
      return { args }
    },
    template: `<UiButton v-bind="args">O</UiButton>`,
  }),
}

export const Disabled: Story = {
  args: {
    mod: BtnMods.DISABLED,
  },
  render: (args) => ({
    components: { UiButton },
    setup() {
      return { args }
    },
    template: `<UiButton v-bind="args">Disabled</UiButton>`,
  }),
}

export const Click: Story = {
  args: {
    mod: BtnMods.START,
  },
  render: (args) => ({
    components: { UiButton },
    setup() {
      return { args }
    },
    template: `<UiButton v-bind="args" @click="() => console.log('Button clicked!')">Click me!</UiButton>`,
  }),
}
