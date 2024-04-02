import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { ScFrage } from '../shared/sc-frage'; //Interface
import { Router } from '@angular/router';

@Component({
  selector: 'lnx-em-singlemode',
  templateUrl: './em-singlemode.component.html',
  styleUrls: ['./em-singlemode.component.css']
})
export class EmSinglemodeComponent {
  fragenNummerArr : number[]=[];
  anzFragen=0
  indx=0
  fehler=0
  richtig=0
  scfragen: ScFrage[]
  selectedAntwort =""
  fehlerProzent=0

  constructor(private mysv: MyserviceService,
    private router: Router)
  {
    this.anzFragen=this.mysv.sv
    this.scfragen=this.mysv.getAll()
    this.fragenNummerArr=this.mysv.myIndxArr

    this.mysv.af=this.anzFragen
    this.mysv.fl=this.fehler
  }

  getScFrageElement(array:ScFrage[],i:number):ScFrage{
    return array[i];
  }

  onAntwortPruefen(actuelleFrage:ScFrage) {
    if (this.selectedAntwort==="") {
      this.fehler++
    }

    else{
      if ( this.selectedAntwort!==actuelleFrage.qcorrect){
        this.fehler++
        this.fehlerProzent=this.fehler/this.anzFragen*100

        if(this.fehlerProzent>=20) { 
          window.alert('Zu viel Fehler (20% oder mehr). Geh nochmal lernen!')
          this.router.navigate(['lm-seite']);//!!!!!! Routing
        }
      }

      else{
        this.richtig++
      }
      this.selectedAntwort =""
    }

    this.indx++

    if (this.indx===this.anzFragen) {this.zuErgebnisse()}
  }

  zuErgebnisse(){
      this.mysv.sv=this.anzFragen
      this.mysv.fl=this.fehler
      this.router.navigate(['em-ergebnisse']);//!!!!!! Routing
  }

}
