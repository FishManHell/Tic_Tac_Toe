<script setup lang="ts">
import cls from './UiBoard.module.scss'
import classNames from 'classnames'
import { CROSS, ZERO } from '@/shared/config/board.config.ts'

defineProps<{
  class?: string
  mark: (row: number, col: number) => void
  board: string[]
}>()
</script>

<template>
  <table :class="classNames(cls.board, $props.class)">
    <tbody>
      <tr v-for="row in 3" :key="row">
        <td
          v-for="col in 3"
          :key="col"
          @click="mark(row - 1, col - 1)"
          :class="
            classNames(
              cls.cell,
              board[(row - 1) * 3 + (col - 1)] === CROSS && cls.x,
              board[(row - 1) * 3 + (col - 1)] === ZERO && cls.o,
            )
          "
        >
          {{ board[(row - 1) * 3 + (col - 1)] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
