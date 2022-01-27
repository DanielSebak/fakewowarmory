import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { WowapisService } from '../api/wowapis.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  realm_name: String = '';
  //realm_slug: String = '';
  character_name: String = '';
  character_faction: String = '';
  character_class: String = '';
  character_spec: String = '';
  character_race: String = '';
  character_gender : String = '';
  character_apperance = JSON;

  constructor(private wowApis: WowapisService, private storage: Storage) {
    this.CharacterApperance();
  }

  public CharacterApperance() {
    this.SaveApperance();
  }

  public SaveApperance() {
    this.wowApis.getCharacterApperanceSummary(this.realm_name, this.character_name).subscribe(
      (data) =>
      {
        this.storage.set('apperance', JSON.stringify(data))
        .then(
          () => console.log('STORED APPERANCE')
        );
      }
    );
    this.ParseApperance();
  }

  public ParseApperance(){
    this.storage.get('apperance')
    .then(
      data => {
        this.character_apperance = JSON.parse(data);
        this.character_faction = this.character_apperance['faction']['name'];
        this.character_class = this.character_apperance['playable_class']['name'];
        this.character_spec = this.character_apperance['active_spec']['name'];
        this.character_race = this.character_apperance['playable_race']['name'];
        this.character_gender = this.character_apperance['gender']['name'];
        console.log(this.character_apperance);
      },
      error => console.log(error),
    );
  }

}
