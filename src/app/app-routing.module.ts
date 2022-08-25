import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat-bot/chat/chat.component';
import { SettingsComponent } from './chat-bot/settings/settings.component';


const routes: Routes = [
  {
    path: "", 
    pathMatch: "full", 
    redirectTo: "chat"
  },
  {
    path: "chat", 
    component: ChatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
