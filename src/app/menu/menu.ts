 export class Menu {
      navigateTo: string;
      display: string;
      visible: boolean;
      tooltip: string;
 
   constructor (navigatorTo: string, display: string, visible:boolean, tooltip: string) {
   	this.navigateTo=navigatorTo;
   	this.display=display;
   	this.visible=visible;
   	this.tooltip=tooltip;
   }
}