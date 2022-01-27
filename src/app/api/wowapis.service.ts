import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WowapisService {

  constructor(private http: HttpClient) {}

  access_token : String = 'USdp1aRuRU5fO1b4sdZqmQfVGWMzSK4rNd'
  region : String = 'eu'

    //search 
    public getProfileSummary(){
      return this.http.get('https://'+this.region+'.api.blizzard.com/profile/user/wow?namespace=profile-'+this.region+'&locale=en_US&access_token='+this.access_token);
    }

    //bonus info
    public getCharacterProfileSummary(realmId_characterId : String){
      return this.http.get('https://'+this.region+'.api.blizzard.com/profile/user/wow/protected-character/'+realmId_characterId+'?namespace=profile-'+this.region+'&locale=en_US&access_token='+this.access_token);
    }

    //overview
    public getCharacterApperanceSummary(realm_name: String, character_name : String){
      return this.http.get('https://'+this.region+'.api.blizzard.com/profile/wow/character/'+realm_name+'/'+character_name+'/appearance?namespace=profile-'+this.region+'&locale=en_US&access_token='+this.access_token);
    }

    //gear
    public getCharacterEquipmentSummary(realm_name: String, character_name : String){
      return this.http.get('https://'+this.region+'.api.blizzard.com/profile/wow/character/'+realm_name+'/'+character_name+'/equipment?namespace=profile-eu&locale=en_US&access_token='+this.access_token);
    }
}
