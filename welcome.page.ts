import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class BienvenidoPage {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    // la animación se va a mostrar por 3 seg y luego se dirige a la pag de inicio
    setTimeout(() => {
      this.navCtrl.navigateForward('/home');
    }, 3000); // cambia a la página de inicio después de 3 segs
  }
}
