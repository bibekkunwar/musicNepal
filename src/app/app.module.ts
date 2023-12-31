import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//global components here

import { NavBarComponent } from './layouts/nav-bar/nav-bar.component';
import { FooterComponent } from './layouts/footer/footer.component';

// homePage components//

import { HomeBannerComponent } from './homepage/home-banner/home-banner.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FeaturedReleaseComponent } from './homepage/featured-release/featured-release.component';
import { LatestReleaseComponent } from './homepage/latestRelease/latestRelease.component';
import { LatestVideosComponent } from './homepage/latestVideos/latestVideos.component';
import { FeaturedArtistsComponent } from './homepage/featuredArtists/featuredArtists.component';
import { LatestNewsComponent } from './homepage/latestNews/latestNews.component';
import { CommonModule } from '@angular/common';
import { MnIntroComponent } from './homepage/mnIntro/mnIntro.component';

// audioPage components
import { AudiopageComponent } from './Audio/audiopage/audiopage.component';
import { GazalComponent } from './Audio/audiopage/gazal/gazal.component';
import { FolkComponent } from './Audio/audiopage/folk/folk.component';
import { DevotionalComponent } from './Audio/audiopage/devotional/devotional.component';
import { MovieComponent } from './Audio/audiopage/movie/movie.component';
import { PopComponent } from './Audio/audiopage/pop/pop.component';
import { ModernComponent } from './Audio/audiopage/modern/modern.component';
import { FestivityComponent } from './Audio/audiopage/festivity/festivity.component';
import { OtherComponent } from './Audio/audiopage/other/other.component';
import { TunesComponent } from './Audio/audiopage/tunes/tunes.component';
import { EthnicComponent } from './Audio/audiopage/ethnic/ethnic.component';
import { ClassicalComponent } from './Audio/audiopage/classical/classical.component';
import { NationalComponent } from './Audio/audiopage/national/national.component';
import { ChildrenComponent } from './Audio/audiopage/children/children.component';
import { RemixComponent } from './Audio/audiopage/remix/remix.component';
import { PopRockComponent } from './Audio/audiopage/popRock/popRock.component';
import { GeetiKathaComponent } from './Audio/audiopage/geetiKatha/geetiKatha.component';

//video page Components

// new upload is fetched from home page latest videos
import { VideoPageComponent } from './videoPage/videoPage.component';
import { GoldenHitsComponent } from './videoPage/goldenHits/goldenHits.component';
import { PopRockVideosComponent } from './videoPage/popRock-videos/popRock-videos.component';
import { AdhunikVideosComponent } from './videoPage/adhunikVideos/adhunikVideos.component';
import { PopSongsVideoComponent } from './videoPage/popSongs-video/popSongs-video.component';
import { AdhunikSongsVideosComponent } from './videoPage/adhunik-Songs-videos/adhunikSongs-videos.component';

// Radio componenet
import { RadioComponent } from './Radio/Radio.component';

// services here
import { HomeServiceService } from './services/homePage/home-service.service';
import { YoutubeApiService } from './services/youtube/youtube-api.service';
import { AudioService } from './services/audioPage/audio.service';

// other effects
import {
  LazyLoadImageModule,
  LAZYLOAD_IMAGE_HOOKS,
  ScrollHooks,
} from 'ng-lazyload-image';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerComponent } from './layouts/player/player.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
// import { ModalPopUpComponent } from './layouts/modal-pop-up/modal-pop-up.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CustomDialogServiceService } from './services/dialog/custom-dialog-service.service';
import { ServicePageComponent } from './service-page/service-page.component';
import { YoutubeComponent } from './service-page/youtube/youtube.component';
import { AggregatorComponent } from './service-page/aggregator/aggregator.component';
import { MomoAppComponent } from './service-page/momo-app/momo-app.component';
import { StudioComponent } from './service-page/studio/studio.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { AnniversaryComponent } from './gallery-page/anniversary/anniversary.component';
// import lightGallery from 'lightgallery';
import { LightboxModule } from 'ngx-lightbox';
import { LightgalleryModule } from 'lightgallery/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeBannerComponent,
    NavBarComponent,
    HomepageComponent,
    FeaturedReleaseComponent,
    LatestReleaseComponent,
    LatestVideosComponent,
    FeaturedArtistsComponent,
    LatestNewsComponent,
    FooterComponent,
    MnIntroComponent,
    AudiopageComponent,
    GazalComponent,
    FolkComponent,
    DevotionalComponent,
    MovieComponent,
    PopComponent,
    ModernComponent,
    FestivityComponent,
    OtherComponent,
    TunesComponent,
    EthnicComponent,
    ClassicalComponent,
    NationalComponent,
    ChildrenComponent,
    RemixComponent,
    PopRockComponent,
    GeetiKathaComponent,
    VideoPageComponent,
    GoldenHitsComponent,
    PopRockVideosComponent,
    AdhunikVideosComponent,
    PopSongsVideoComponent,
    AdhunikSongsVideosComponent,
    RadioComponent,
    PlayerComponent,
    AboutUsComponent,
    ContactPageComponent,
    ServicePageComponent,
    YoutubeComponent,
    AggregatorComponent,
    MomoAppComponent,
    StudioComponent,
    FaqPageComponent,
    GalleryPageComponent,
    AnniversaryComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    LazyLoadImageModule,
    MatDialogModule,
    LightgalleryModule,
    LightboxModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    HomeServiceService,
    YoutubeApiService,
    AudioService,
    CustomDialogServiceService,
    { provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
