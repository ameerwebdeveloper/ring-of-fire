import { Routes } from '@angular/router';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { GameComponent } from './game/game.component';
import{AddPlayerDialogComponent} from './add-player-dialog/add-player-dialog.component';
export const routes: Routes = [
    {path:'' , component:StartScreenComponent},
    {path:'game', component:GameComponent},
    {path:'addPlayer', component:AddPlayerDialogComponent},
];
