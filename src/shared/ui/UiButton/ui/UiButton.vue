<script setup lang="ts">
import cls from './UiButton.module.scss'
import classNames from 'classnames'
import type { ButtonProps } from '../model/types/button.ts'

const props = defineProps<ButtonProps>()

const mods = {
  ...(props.mod ? { [cls[props.mod]]: true } : {}),
  [cls.disabled]: props.disabled,
}
</script>

<template>
  <button :class="classNames(cls.btn, props.class, mods)" :disabled="disabled" v-bind="$attrs">
    <slot></slot>
  </button>
</template>
