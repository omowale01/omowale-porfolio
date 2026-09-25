import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Experience } from './components/experience/experience';
import { Education } from './components/education/education';
import { Resume } from './components/resume/resume';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@NgModule({
  declarations: [
    App,
    Navbar,
    Hero,
    About,
    Skills,
    Projects,
    Experience,
    Education,
    Resume,
    Contact,
    Footer,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
