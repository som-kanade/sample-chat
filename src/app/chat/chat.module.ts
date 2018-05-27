import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoxComponent } from './chat-box/chat-box.component';

import { RouterModule,Routes} from '@angular/router';
import { LoginComponent } from '../user/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'chat',component:ChatBoxComponent,pathMatch:'full'}
    ])
  ],
  declarations: [ChatBoxComponent]
})
export class ChatModule { }
