import type { Ref } from 'vue'

export interface IUseGame {
  firstPlayer: Ref<string>
  currentPlayer: Ref<string>
  board: Ref<string[], string[]>
  gameResult: Ref<string | null>
  chooseFirstPlayer: (player: string) => void
  mark: (row: number, col: number) => void
  startGame: () => void
}
