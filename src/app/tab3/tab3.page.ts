import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { WowapisService } from '../api/wowapis.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  head: String = '';
  neck: String = '';
  shoulder: String = '';
  back: String = '';
  chest: String = '';
  shirt: String = '';
  //tabard: String = '';
  wrist: String = '';
  hands: String = '';
  waist: String = '';
  legs: String = '';
  feet: String = '';
  finger1: String = '';
  finger2: String = '';
  trinket1: String = '';
  trinket2: String = '';
  main_hand: String = '';
  off_hand: String = '';
  realm_name: String;
  character_name: String;
  character_equipment = JSON;

  constructor(private wowApis: WowapisService, private storage: Storage) {
    this.CharacterApperance();
  }
  
  CharacterApperance() {
    this.SaveApperance();
  }

  public SaveApperance() {
    this.wowApis.getCharacterEquipmentSummary(this.realm_name, this.character_name).subscribe(
      (data) =>
      {
        this.storage.set('equipment', JSON.stringify(data))
        .then(
          () => console.log('STORED EQUIPMENT')
        );
      }
    );
    this.ParseApperance();
  }

  public ParseApperance(){
    this.storage.get('equipment')
    .then(
      data => {
        this.character_equipment = JSON.parse(data);
        this.head = this.character_equipment['equipped_items'][0]['name'];
        this.neck = this.character_equipment['equipped_items'][1]['name'];
        this.shoulder = this.character_equipment['equipped_items'][2]['name'];
        this.back = this.character_equipment['equipped_items'][14]['name'];
        this.chest = this.character_equipment['equipped_items'][4]['name'];
        this.shirt = this.character_equipment['equipped_items'][3]['name'];
        this.wrist = this.character_equipment['equipped_items'][8]['name'];
        this.hands = this.character_equipment['equipped_items'][9]['name'];
        this.waist = this.character_equipment['equipped_items'][5]['name'];
        this.legs = this.character_equipment['equipped_items'][6]['name'];
        this.feet = this.character_equipment['equipped_items'][7]['name'];
        this.finger1 = this.character_equipment['equipped_items'][10]['name'];
        this.finger2 = this.character_equipment['equipped_items'][11]['name'];
        this.trinket1 = this.character_equipment['equipped_items'][12]['name'];
        this.trinket2 = this.character_equipment['equipped_items'][13]['name'];
        this.main_hand = this.character_equipment['equipped_items'][15]['name'];
        this.main_hand = this.character_equipment['equipped_items'][16]['name'];
        if(!this.head) this.head = 'Empty slot';
        if(!this.neck) this.neck = 'Empty slot';
        if(!this.shoulder) this.shoulder = 'Empty slot';
        if(!this.back) this.back = 'Empty slot';
        if(!this.chest) this.chest = 'Empty slot';
        if(!this.shirt) this.shirt = 'Empty slot';
        if(!this.wrist) this.wrist = 'Empty slot';
        if(!this.hands) this.hands = 'Empty slot';
        if(!this.waist) this.waist = 'Empty slot';
        if(!this.legs) this.legs = 'Empty slot';
        if(!this.feet) this.feet = 'Empty slot';
        if(!this.finger1) this.finger1 = 'Empty slot';
        if(!this.finger2) this.finger2 = 'Empty slot';
        if(!this.trinket1) this.trinket1 = 'Empty slot';
        if(!this.trinket2) this.trinket2 = 'Empty slot';
        if(!this.main_hand) this.main_hand = 'Empty slot';
        if(!this.off_hand) this.off_hand = 'Empty slot';
        console.log(this.character_equipment);
      },
      error => console.log(error),
    );
  }
}
