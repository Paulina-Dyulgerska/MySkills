# REACT Web Project

<b>MySkills is a project that presents the results from my REACT training and summarizes the content of my professional and education life. </b>

**MySkills** is dedicated to show **all my educations, experiences, projects, certificates, contacts, some interesting articles, a summary of my current knowledge and achievements**. 

The site offers a register and login forms. By register the user data is evaluated, stored and validated by the Firebase Authentication service. Only the first user created – the Admin – is seeded by an Admin Users Seeder. The file for this seeding is not available in the public back-end Web API repository.

The goal of my work on this project was to create a **REACT** front-end application, that uses external authentication services from **Firebase** and the power of **ASP.NET Core Web AP**I as a back-end technology with the external service like **SendGrid, ReCaptcha, Azure Storage, Azure App Services, Azure Database Services**. The REACT front-end application is **hosted by Firebase**. The back-end application is **hosted by Azure**.

Site has all of its styles and functions created by me with the simple aim to practice the things learned in the **HTML & CSS** courses. This is the reason I have tried to create it as max responsive as a back-end beginner developer could do. I dare to have the done the structure of html and all the css done. Pictures are from free internet sites and are not my creation.

The applications are using **JWT** to communicate user state, authentication and authorisation. JWT is stored in Local Storage and Session Storage depending of the user preferences (remember me or not).
The JWT is validated with a **custom Middleware** in the back-end Web API.

The Blog section is with articles from blogs in Internet. There is a functionality for voting with likes. 
The comments, categories and admin area are not implemented for the moment.

<b>MySkills is deployed online and could be found here:</b>
-	https://myskills.dotnetweb.net

<b>I hope you will like it and at the end - you will want to contact me! </b>

<b>More about the tools that MySkills provides and how they are realised:</b>

This website is designed and runs using the main technologies below:

<b>Front-end Framework: </b>
- REACT

<b>Back-end Framework: </b>
-	ASP.NET Core 5

<b>Programming Languages:</b>
-	Front-end: JavaScript
-	Back-end: C#

<b>IDE:</b> 
-	Visual Studio Enterprise 2019
-	Visual Studio Code

<b>Database:</b>
-	Azure SQL DB - production DB
-	MS SQL Server 2019 - development DB
-	MS SQL Server Management Studio 18
-	Firebase Authentication Service

<b>ORM:</b>
-	Entity Framework Core 5

<b>Markup Languages:</b>
-	HTML5 /no external theme is used; custom pages html/
-	CSS /all CSS styles are custom made; no external libraries are used/

<b>External APIs:</b>
-	SendGrid API
-	Google ReCaptcha v. 3 – for login, register and contact forms

<b>Cloud services:</b>
-	Facebook authentication
-	Azure App Service - hosting for the back-end Web API
-	Azure SQL Database - prodcution back-end DB
-	Azure Storage - Blob Service used for storing author's personal files

<b>Additional:</b>
-	Nikolay Kostov’s ASP.NET Core Template - https://github.com/NikolayIT/ASP.NET-Core-Template
- Create React App template
-	AutoMapper
-	AJAX
- StyleCop Analyzers
-	Font Awesome
-	Json
-	Information for contact messages to admin and to contacted user - sending e-mails to both of them
-	Validation attributes + Custom validation attributes - still things TODO
-	Local Storage
-	Session Storage
-	Repository Pattern
-	Dependency Injection
-	Automatic data seeding on first application’s run
-	Code first model approach
-	Log in file - wwwroot/log/MySkills.log ... TODO
-	Distributed Memory Cache - SQL Server ... TODO

<b>Database diagrams:</b>
-	Full diagram:

<img width="308" alt="FullDBDiagram" src="https://user-images.githubusercontent.com/54845614/133264423-68d2c1e1-c8af-41ab-8c9c-00487adc5222.png">


-	All tables related to basic entities:

<img width="360" alt="DBDiagramConcret" src="https://user-images.githubusercontent.com/54845614/133264524-c6315d65-f0a2-4bdd-a566-0a6556d903f6.png">
 

-	Detailed views:

<img width="595" alt="DBDiagramDeatils1" src="https://user-images.githubusercontent.com/54845614/133264567-3631722c-d8a3-4872-8873-a2d8c89340bb.png">

<img width="597" alt="DBDiagramDeatils2" src="https://user-images.githubusercontent.com/54845614/133264587-7f31cbbd-2a4e-46f9-93ec-8803b109803b.png">


<b>Pages screenshots:</b>

<b>Home Page:</b>

<img width="872" alt="Home" src="https://user-images.githubusercontent.com/54845614/133281166-79c109b0-3fb5-4534-ac30-c894a16ff691.png">


<b>Register Page:</b>

<img width="886" alt="Register" src="https://user-images.githubusercontent.com/54845614/133281181-183e2470-6239-468c-965d-666f1db5d7d5.png">


<b>Register Thank You Page:</b>

<img width="825" alt="ThankYouRegister" src="https://user-images.githubusercontent.com/54845614/133282801-569a0883-4786-4215-b27d-30fcf9c845e0.png">


<b>Login Page:</b>

<img width="879" alt="Login" src="https://user-images.githubusercontent.com/54845614/133281204-0c1c9137-4bb4-4c96-9eb8-f2288f2f300b.png">


<b>Admin User Menu:</b>

<img width="890" alt="AdminView" src="https://user-images.githubusercontent.com/54845614/133281326-8db75cd8-4ef3-4eca-997a-5fc93aee602b.png">


<b>Educations Page:</b>

<img width="584" alt="Educations" src="https://user-images.githubusercontent.com/54845614/133281521-6c00d47b-22e5-47b0-8e48-925123007b84.png">

<img width="606" alt="EducationDetails" src="https://user-images.githubusercontent.com/54845614/133281531-cbb35458-3c14-4936-86f8-23d30c31c7c1.png">


<b>Experiences Page:</b>

<img width="739" alt="Experiences" src="https://user-images.githubusercontent.com/54845614/133281558-5a13e6ab-a73a-45c9-a8c7-0fd4ec1f22a3.png">

<img width="812" alt="ExperiencesDetails" src="https://user-images.githubusercontent.com/54845614/133281706-2cc6230a-0d94-4ece-93c0-0efa1d91fc35.png">


<b>Download CV and Show CV Page:</b>
 
<img width="902" alt="DownloadCV" src="https://user-images.githubusercontent.com/54845614/133282027-c2f4aca8-f1a2-4ce7-8c73-c9636e308a06.png">

<img width="901" alt="ShowCV" src="https://user-images.githubusercontent.com/54845614/133282078-22700d7b-3fd0-4843-ace5-28b2dccebc8c.png">
 
 

<b>Contacts Page:</b>

<img width="813" alt="Contact" src="https://user-images.githubusercontent.com/54845614/133281434-b9f309c9-3ec7-4cf1-be1f-724d646ded6d.png">


<b>Contact Message Sent Thank You Page:</b>

<img width="810" alt="ThankYouContactMessageSent" src="https://user-images.githubusercontent.com/54845614/133283180-80cbaa60-2614-4081-948f-cc2fc9f66711.png">


<b>Blog Page:</b>

<img width="612" alt="Blog" src="https://user-images.githubusercontent.com/54845614/133281817-21268a96-849c-417a-9b63-3c099fa24fa9.png">


<b>Dynamic buttons:</b>

<img width="687" alt="LiveButtons" src="https://user-images.githubusercontent.com/54845614/133282166-a7ddc71b-da8a-4d5e-92eb-634bfa1ca80c.png">

<img width="575" alt="LiveButtons1" src="https://user-images.githubusercontent.com/54845614/133282172-46d14cd2-8748-44da-986a-54db188c7852.png">

<img width="512" alt="LiveButtons2" src="https://user-images.githubusercontent.com/54845614/133282181-8a20485a-6927-46ba-b01b-3f96f35fc8bd.png">

<img width="473" alt="LiveButtons3" src="https://user-images.githubusercontent.com/54845614/133282185-de29e311-b57f-4807-8680-f248b03254ad.png">


<b>Emails:</b>

<b>Confirmation email for registration:</b>
TODO


<b>Thank you email to contacting person from site admin:</b>

<img width="595" alt="EmailContactPerson0" src="https://user-images.githubusercontent.com/54845614/133284939-efa11740-25e8-46c4-be09-565e782316a0.png">

<img width="602" alt="EmailContactPerson1" src="https://user-images.githubusercontent.com/54845614/133284940-2ef6ac4f-5aed-48b4-84e7-310a49b1ea7a.png">


<b>Email to site admin with contact message information:</b>

<img width="585" alt="EmailAdmin0" src="https://user-images.githubusercontent.com/54845614/133284957-6fcae8f8-9207-4084-93b5-19e52ac36e80.png">

<img width="516" alt="EmailAdmin1" src="https://user-images.githubusercontent.com/54845614/133284973-39368457-a526-43b3-8eb2-61008282a105.png">



<b>I hope you like it and now you want to contact me. </b>

<b>Thank you for your time and interest! </b>
