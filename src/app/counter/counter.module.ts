import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
  // Para encapsular el componente debemos declararlo
  declarations: [
    CounterComponent,
  ],
  exports: [ // Si lo necesito en otro lugar, debo exportar el componente
    CounterComponent,
  ],
})
export class CounterModule {

}
