import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service'; //Service
import { ScFrage } from '../shared/sc-frage'; //Interface




@Component({
  selector: 'lnx-cm-seite',
  templateUrl: './cm-seite.component.html',
  styleUrls: ['./cm-seite.component.css']
})
export class CmSeiteComponent {
  indx=0
  fehler=0
  selectedAntwort =""
  scfragen: ScFrage[]
  arrValues: string[] = ["A","B","C","D","E"];
  selectedValues: string[] = [];


  items = [
    { label: 'A', selected: false, value: 'A' },
    { label: 'B', selected: false, value: 'B' },
    { label: 'C', selected: false, value: 'C' },
    { label: 'D', selected: false, value: 'D' },
    { label: 'E', selected: false, value: 'E' }
  ];

  clearItems(){
    this.items.forEach(element => {
      element.selected=false
    });
  }

  onSubmit():string {
    let tmpstr=''

    const selectedItems = this.items.filter(item => item.selected)
    selectedItems.forEach(element => {tmpstr+=element.label  
    });

    return tmpstr
  }

  constructor(private myservice: MyserviceService,
    private router: Router){
    this.scfragen=this.myservice.getAll()
  }

  getScFrageElement(array:ScFrage[],i:number):ScFrage{
    return array[i];
  }

  onNextClick(){
    if (this.indx<this.scfragen.length) {
      this.indx++
      this.selectedAntwort =""
    }
    this.clearItems()
  }

  onPreviosClick(){
   if (this.indx>0) {
      this.indx--
      this.selectedAntwort =""
    }
    this.clearItems()
  }


  //-----------------------------------SC
  onAntwortPruefen(actuelleFrage:ScFrage) {

    if (actuelleFrage.qtyp==='sc'){
      if (this.selectedAntwort!=="") {
        if ( this.selectedAntwort!==actuelleFrage.qcorrect){
          this.fehler++
          window.alert('Fehler. Eine Frage zurück!')
  
          if(this.fehler>7) {
            window.alert('Zu viel Fehler. Geh nochmal lernen!')
            this.router.navigate(['lm-seite']);//!!!!!! Routing
          }
          else{
            this.onPreviosClick()
          }
        }
  
        else{
          window.alert('Richtig. Nächste Frage.')
          this.onNextClick()
        }
        this.selectedAntwort ="";
      }
    }
    //-----------------------------------MC

    if (actuelleFrage.qtyp==='mc'){
      
      if (this.onSubmit()!=="") {
        if (this.onSubmit()!==this.getScFrageElement(this.scfragen,this.indx).qcorrect) 
        { this.fehler++
           window.alert('Fehler. Eine Frage zurück!')
      
           if(this.fehler>7) 
            {
              window.alert('Zu viel Fehler. Geh nochmal lernen!')
              this.router.navigate(['lm-seite']);//!!!!!! Routing
            }
            
            else
            {
              this.onPreviosClick()
            }
        }
      
        else
        {
          window.alert('Richtig. Nächste Frage.')
          this.onNextClick()
        }
      }
    }
  }






  // updateSelectedValues(option: any) {
  //   if (option.checked) {
  //     this.selectedValues.push(option.value);
  //   } else {
  //     const index = this.selectedValues.indexOf(option.value);
  //     this.selectedValues.splice(index, 1);
  //   }
  // }





  // arrToStr(selectedValues1: string[]):string{
  //   let tempstr=""
  //   for (let i = 0; i < selectedValues1.length; i++) {
  //     tempstr = tempstr.concat(selectedValues1[i]);
  //   }
  //   console.log(tempstr)
  //   return tempstr
  // }


}
