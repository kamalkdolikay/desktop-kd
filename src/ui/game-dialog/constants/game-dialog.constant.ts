import type { GameDialogData } from '../interface/game-dialog.interface';

// This ID must match the 'dialogId' in your DESKTOP_ICONS constant for the Game icon
export const GAME_DIALOG_ID = 'game-dialog';

export const GAME_DATA: GameDialogData = {
  title: 'Bars n Bruises',
  // Since you moved the folder to 'public/', this relative path works automatically
  gameUrl: '/embed_game/index.html', 
};