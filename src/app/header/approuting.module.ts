import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from '../header/header.component';
import { BodyComponent } from '../body/body.component';
import { FooterComponent } from '../footer/footer.component';

import { HomeComponent } from '../body/home/home.component';
import { AboutComponent } from '../body/about/about.component';
import { IndependenceComponent } from '../body/independence/independence.component';
import { KrishnaComponent } from '../body/krishna/krishna.component';
import { ContactComponent } from '../body/contact/contact.component';
import { RegistrationComponent } from '../body/registration/registration.component';
import { WebComponent } from '../body/web/web.component';
import { JavaComponent } from '../body/java/java.component';
import { ProductComponent } from '../body/product/product.component';
import { JavascriptComponent } from '../body/javascript/javascript.component';
import { TypescriptComponent } from '../body/typescript/typescript.component';
import { AngularComponent } from '../body/angular/angular.component';
import { Html5Component } from '../body/html5/html5.component';
import { Css3Component } from '../body/css3/css3.component';
import { InterviewComponent } from 'src/app/body/interview/interview.component';
import { DotnetComponent } from '../body/dotnet/dotnet.component';
import { PagenotfoundComponent } from '../body/pagenotfound/pagenotfound.component';

const routes:Routes=[
    { path:'', redirectTo:'/Home', pathMatch:'full'},
    { path: 'Home', component:HomeComponent },
    { path: 'AboutUs', component:AboutComponent,
       children:[
           { path:'Independence', component:IndependenceComponent },
           { path:'krishna', component:KrishnaComponent }
       ]
    },
    { path: 'ContactUs', component:ContactComponent },
    { path: 'Register', component:RegistrationComponent,
        children:[
           { path:'Dotnet', component:DotnetComponent }
       ]
    },
    { path: 'Web', component:WebComponent },
    { path: 'Java', component:JavaComponent },
    { path: 'Product', component:ProductComponent},
    { path: 'JavaScript', component:JavascriptComponent},
    { path: 'TypeScript', component:TypescriptComponent },
    { path: 'Angular', component:AngularComponent },
    { path: 'Html5', component:Html5Component },
    { path: 'Css3', component:Css3Component },
    { path: 'Interview', component:InterviewComponent},
    { path: '**', component:PagenotfoundComponent}
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]
})
export class AppRouting{ }
    export const routingComponent=[ 
        HeaderComponent, BodyComponent, FooterComponent, HomeComponent, AboutComponent, IndependenceComponent, KrishnaComponent,
        ContactComponent, RegistrationComponent, DotnetComponent, WebComponent, JavaComponent, ProductComponent, 
        JavascriptComponent, TypescriptComponent, AngularComponent, Html5Component, Css3Component, InterviewComponent, PagenotfoundComponent
    ]