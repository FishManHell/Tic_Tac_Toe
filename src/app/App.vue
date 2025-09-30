<script setup lang="ts">
import { useGame } from '@/entities/Game'
import { ChooseFirstPlayer } from '@/features/ChooseFirstPlayer'
import { BtnMods, UiButton } from '@/shared/ui/UiButton'
import { UiBoard } from '@/entities/UiBoard'

const { chooseFirstPlayer, firstPlayer, mark, gameResult, startGame, board } = useGame()
</script>

<template>
  <div class="game_wrapper">
    <h1 class="title">Tic Tac Toe</h1>

    <ChooseFirstPlayer :chooseFirstPlayer="chooseFirstPlayer" :firstPlayer="firstPlayer" />

    <h2 v-if="gameResult" class="result">
      <span v-if="gameResult !== 'Draw'">{{ gameResult }} wins! 🎉</span>
      <span v-else>It's a Draw! 🤝</span>
    </h2>

    <UiBoard :board="board" :mark="mark" />

    <UiButton
      @click="startGame"
      :mod="BtnMods.START"
      :disabled="board.every((cell) => cell === '')"
    >
      Start New Game
    </UiButton>
  </div>
</template>
