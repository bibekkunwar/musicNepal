import { MomoAppComponent } from './service-page/momo-app/momo-app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AudiopageComponent } from './Audio/audiopage/audiopage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { VideoPageComponent } from './videoPage/videoPage.component';
import { RadioComponent } from './Radio/Radio.component';
import { PlayerComponent } from './layouts/player/player.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ModalPopUpComponent } from './layouts/modal-pop-up/modal-pop-up.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { YoutubeComponent } from './service-page/youtube/youtube.component';
import { AggregatorComponent } from './service-page/aggregator/aggregator.component';
import { StudioComponent } from './service-page/studio/studio.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { AnniversaryComponent } from './gallery-page/anniversary/anniversary.component';
import { MnGalleryComponent } from './gallery-page/mn-gallery/mn-gallery.component';



const routes: Routes = [
  {path:'',pathMatch:"full",component:HomepageComponent},
  { path: "audio", component: AudiopageComponent},
  {path: 'video', component: VideoPageComponent},
  {path: 'radio', component: RadioComponent},
  { path: 'album', component: PlayerComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path : 'contact-us', component: ContactPageComponent},
  {path: 'modal-pop-up', component: ModalPopUpComponent},
  {path: 'services', component: ServicePageComponent},
  {path: 'services/youtube', component: YoutubeComponent},
  {path: 'services/aggregator', component: AggregatorComponent},
  {path: 'services/momo', component:MomoAppComponent},
  {path: 'services/studio', component: StudioComponent},
  {path:'faq', component: FaqPageComponent},
{path:'gallery', component: GalleryPageComponent},
// {path: 'anniversary', component: AnniversaryComponent},
// {path:"mngallery", component: MnGalleryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
