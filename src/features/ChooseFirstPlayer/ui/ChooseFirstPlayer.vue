<script setup lang="ts">
import { CROSS, ZERO } from '@/shared/config/board.config.ts'
import { BtnMods, UiButton } from '@/shared/ui/UiButton'
import cls from './ChooseFirstPlayer.module.scss'

defineProps<{
  firstPlayer: string
  chooseFirstPlayer: (player: string) => void
}>()
</script>

<template>
  <section :class="cls.choose_wrapper">
    <h2>
      Who will start first ? <span :class="cls.player">{{ firstPlayer }}</span>
    </h2>
    <div :class="cls.btns_wrapper">
      <UiButton @click="chooseFirstPlayer(CROSS)" :mod="BtnMods.CROSS">{{ CROSS }}</UiButton>
      <UiButton @click="chooseFirstPlayer(ZERO)" :mod="BtnMods.ZERO">{{ ZERO }}</UiButton>
    </div>
  </section>
</template>
