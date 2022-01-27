import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { WowapisService } from '../api/wowapis.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  /*realmId_characterId: String = '';
  realm_name: String = '';
  character_name: String = '';
  real_profile = JSON;*/

  constructor(/*private wowApis: WowapisService, private storage: Storage*/) {
    //this.RefreshList();
  }

  /*public RefreshList() {
    this.SaveProfile();
  }
  

  public SaveProfile() {
    this.wowApis.getProfileSummary().subscribe(
      (data) =>
      {
        this.storage.set('profile', JSON.stringify(data))
        .then(
          () => console.log('STORED PROFILE')
        );
      }
    );
  }*/
}