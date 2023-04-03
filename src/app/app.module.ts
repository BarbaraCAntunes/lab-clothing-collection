import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/pre-login-layout/login/login.component';
import { ForgotPasswordComponent } from './pages/pre-login-layout/forgot-password/forgot-password.component';
import { HomeComponent } from './pages/post-login-layout/home/home.component';
import { RegisterNewUserComponent } from './pages/pre-login-layout/register-new-user/register-new-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { BlueGeneralButtonComponent } from './components/blue-general-button/blue-gengeral-button.component';
import { LogoAudacesComponent } from './components/logo-audaces/logo-audaces.component';
import { ArrowLeftComponent } from './components/arrow-left/arrow-left.component';
import { CardsDashbordComponent } from './components/cards-dashbord/cards-dashbord.component';
import { PreLoginPagesComponent } from './pages/pre-login-layout/pre-login-pages/pre-login-pages.component';
import { PostLoginPagesComponent } from './pages/post-login-layout/post-login-pages/post-login-pages.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { TitleComponent } from './components/title/title.component';
import { CollectionsComponent } from './pages/post-login-layout/collections/collections.component';
import { ClothingModelComponent } from './pages/post-login-layout/clothing-model/clothing-model.component';
import { CreateCollectionComponent } from './pages/post-login-layout/create-collection/create-collection.component';
import { EditCollectionComponent } from './pages/post-login-layout/edit-collection/edit-collection.component';
import { CreateClothingModelComponent } from './pages/post-login-layout/create-clothing-model/create-clothing-model.component';
import { EditClothingModelComponent } from './pages/post-login-layout/edit-clothing-model/edit-clothing-model.component';
import { RedDeleteButtonComponent } from './components/red-delete-button/red-delete-button.component';
import { GreyCancelButtonComponent } from './components/grey-cancel-button/grey-cancel-button.component';
import { HttpClientModule } from '@angular/common/http';
import { OrcamentoServiceService } from './services/orcamento-service.service';
import { ContentDashbordComponent } from './components/content-dashbord/content-dashbord.component';
import { UserService } from './services/user-service.service';
import { CollectionServiceService } from './services/collection-service.service';
import { ClothingModelServiceService } from './services/clothing-model-service.service';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CardsDashbordPercentageComponent } from './components/cards-dashbord-percentage/cards-dashbord-percentage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    HomeComponent,
    RegisterNewUserComponent,
    BlueGeneralButtonComponent,
    LogoAudacesComponent,
    ArrowLeftComponent,
    CardsDashbordComponent,
    PreLoginPagesComponent,
    PostLoginPagesComponent,
    SideBarComponent,
    HeaderComponent,
    TitleComponent,
    CollectionsComponent,
    ClothingModelComponent,
    CreateCollectionComponent,
    EditCollectionComponent,
    CreateClothingModelComponent,
    EditClothingModelComponent,
    RedDeleteButtonComponent,
    GreyCancelButtonComponent,
    ContentDashbordComponent,
    CardsDashbordPercentageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
  ],
  providers: [
    OrcamentoServiceService,
    UserService,
    CollectionServiceService,
    ClothingModelServiceService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
