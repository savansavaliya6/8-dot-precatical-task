import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { SkillsComponent } from './skills/skills.component';
import { TechnologyPlatformComponent } from './technology-platform/technology-platform.component';
import { FooterComponent } from './footer/footer.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'Home',  component: HomeComponent, pathMatch: 'full' },
    { path: 'About',  component: AboutComponent, pathMatch: 'full' },
    { path: 'Project',  component: ProjectComponent, pathMatch: 'full' },
    { path: 'Skills',  component: SkillsComponent, pathMatch: 'full' },
    { path: 'Technology-platform',  component: TechnologyPlatformComponent, pathMatch: 'full' },
    { path: 'Footer',  component: FooterComponent, pathMatch: 'full' },
   
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
