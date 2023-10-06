import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleFeatureRoutingModule } from './sample-feature-routing.module';
import { SampleFeatureComponent } from './sample/sample-feature.component';



@NgModule({
  declarations: [
    SampleFeatureComponent
  ],
  imports: [
    CommonModule,
    SampleFeatureRoutingModule
  ]
})
export class SampleFeatureModule { }
