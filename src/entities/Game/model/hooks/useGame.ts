import { ref } from 'vue'
import { COMBOS, ZERO, CROSS } from '@/shared/config/board.config.ts'
import type { IUseGame } from '../types/IUseGame.ts'

export function useGame(): IUseGame {
  const firstPlayer = ref<string>('')
  const currentPlayer = ref<string>('')
  const board = ref<string[]>(Array(9).fill(''))
  const gameResult = ref<string | null>(null)

  const checkWinner = () => {
    for (const combo of COMBOS) {
      const [a, b, c] = combo
      if (
        board.value[a] &&
        board.value[a] === board.value[b] &&
        board.value[a] === board.value[c]
      ) {
        gameResult.value = board.value[a]
        return gameResult.value
      }
    }

    if (board.value.every((cell) => cell !== '')) {
      gameResult.value = 'Draw'
      return gameResult.value
    }

    return null
  }

  const chooseFirstPlayer = (player: string) => {
    if (firstPlayer.value) return
    firstPlayer.value = player
    currentPlayer.value = player
  }

  const mark = (row: number, col: number) => {
    if (!firstPlayer.value || gameResult.value) return

    const index = row * 3 + col
    if (!board.value[index]) {
      board.value[index] = currentPlayer.value
      checkWinner()
      if (!gameResult.value) {
        currentPlayer.value = currentPlayer.value === CROSS ? ZERO : CROSS
      }
    }
  }

  const startGame = () => {
    board.value.fill('')
    gameResult.value = null
    currentPlayer.value = firstPlayer.value
  }

  return { firstPlayer, currentPlayer, board, gameResult, chooseFirstPlayer, mark, startGame }
}
