
function masterPage(content, pageName) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${pageName}</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css">
    </head>
    <body>
        <header>
            <nav class="navbar navbar-expand bg-dark" data-bs-theme="dark">
            <div class="container-fluid">
                <ul class="nav navbar-nav">
                    <li class="nav-item fs-5"><a class="nav-link active" href="/">Home</a></li>
                    <li class="nav-item fs-5"><a class="nav-link" href="/values">Values</a></li>
                    <li class="nav-item fs-5"><a class="nav-link" href="/skills">Skills</a></li>
                    <li class="nav-item fs-5"><a class="nav-link" href="/projects">Projects</a></li>
                    <li class="nav-item fs-5"><a class="nav-link" href="/contact">Contact</a></li>
                </ul>
                </div>
            </nav>
        </header>
        <main class="container-fluid">
            <section>
            ${content}
            </section>
        </main>
       
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    </body>
    </html>`
}

const homePage = ` 
<div class="col-6 offset-3">
<h1 class="text-center font-monospace text-break">Sobre mi</h1>
<h6 class="mt-3 fw-normal lh-base text-break">Soy Maycol Daniel Perez Ciprian, un estudiante de último año de Desarrollo de Software en el Instituto Tecnológico de Las Américas (ITLA). Tengo experiencia en la plataforma .NET para el desarrollo de aplicaciones web. Durante mi carrera, he desarrollado habilidades en programación y resolución de problemas, y he participado en proyectos de equipo, demostrando habilidades de comunicación y colaboración. Estoy interesado en conseguir una posición que me permita seguir aprendiendo y creciendo como desarrollador de software, y estoy dispuesto a trabajar arduamente para lograrlo.</h6></div>`


const valuesPage = `  
<div class="col-6 offset-3">
<ul>
<li>Respeto</li>
<li>Compromiso</li>
<li>Tolerancia</li>
<li>Profesionalismo</li>
<li>Responsabilidad</li>
<li>Confianza</li>
<li>Persistencia</li>
</ul>    </div>`

const skillsPage = `
<div class="col-6 offset-3">
<div class="table">
<table>
    <thead>
        <th>Nombre lenguaje</th>
        <th>Valoracion</th>
    </thead>
    <tbody>
        <tr>
            <td>C#</td>
            <td>4</td>
        </tr>
        <tr>
            <td>Java</td>
            <td>1</td>
        </tr>
        <tr>
            <td>C++</td>
            <td>1</td>
        </tr>
        <tr>
            <td>Python</td>
            <td>1</td>
        </tr>
        <tr>
            <td>JavaScript</td>
            <td>1</td>
        </tr>
        <tr>
            <td>PhP</td>
            <td>1</td>
        </tr>
    </tbody>
   </table>
</div></div>`

const projectsPage = `<div class="container d-flex justify-content-evenly flex-wrap" style="margin-top: 6rem;">

<div class="card" style="width: 18rem;">
    <img src="https://user-images.githubusercontent.com/74669208/219511660-e73c9c6f-5b08-4c3b-b224-5b1e9234712b.png" 
    class="card-img-top w-100 h-50" alt="social media project picture">
    <div class="card-body">
      <h5 class="card-title">Social Media Web App</h5>
      <p class="card-text">Social network where users can create posts and these can be commented on by their friends, using asp net core mvc
      </p>
    </div>
</div>

<div class="card" style="width: 18rem;">
    
    <div id="carouselExampleAutoplaying" class="carousel slide w-100 h-50" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://user-images.githubusercontent.com/74669208/166005524-e71c04ac-fec2-4f76-81db-38fc4eee0147.png" class="d-block w-100" alt="home page image">
          </div>
          <div class="carousel-item">
            <img src="https://user-images.githubusercontent.com/74669208/166007688-19106f4d-bae4-49cc-b981-46edcc848376.png" class="d-block w-100" alt="Login page image">
          </div>
          <div class="carousel-item">
            <img src="https://user-images.githubusercontent.com/74669208/166006330-b723827f-665c-41f7-83be-85bf81e1ab00.png" class="d-block w-100" alt="Admin system page">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
    </div>
    <div class="card-body">
      <h5 class="card-title">Library Web App</h5>
      <p class="card-text">This is an web app created with .net framework and jQuery using the architectonic pattern MVC, the purpuse is to create an app where you can see manage the stock of the books on inventory.</p>
    </div>
</div>

<div class="card" style="width: 18rem;">
    
    <div id="carouselExampleAutoplaying" class="carousel slide w-100 h-50" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://user-images.githubusercontent.com/74669208/197091355-95dc3ad9-a86f-4a56-ab53-7e706569d75f.png" class="d-block w-100" alt="home page image">
          </div>
          <div class="carousel-item">
            <img src="https://user-images.githubusercontent.com/74669208/197091197-33fa6da9-6254-43eb-bcdc-6e024d31f853.png" class="d-block w-100" alt="Login page image">
          </div>
          <div class="carousel-item">
            <img src="https://user-images.githubusercontent.com/74669208/197091149-4540c20f-4bcd-4aa0-9be5-27dd3f04a954.png" class="d-block w-100" alt="Admin system page">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
    </div>
    <div class="card-body">
      <h5 class="card-title">EMarket Web App</h5>
      <p class="card-text">This is an web app created with .net core developed under the ONION clean architecture, MVC for frontEnd and EntityFramework ORM for database management.</p>
    </div>
</div>`

const contactPage = ` 
<div class="d-flex justify-content-center">
<form class="container-sm col-4 offset-4" action="mailto:maycoldpc@gmail.com" method="post">
<div class="mb-3">
    <label class="text-white form-label" for="name">Nombre</label>
    <input type="text" class="form-control" id="name" placeholder="Escriba su Nombre">  
</div>
<div class="mb-3">
    <label class="text-white form-label" for="lastName"> Apellido </label>
    <input type="text" class="form-control" id="lastName" placeholder="Escriba su Apellido">
</div>
<div class="mb-3">
    <label class="text-white form-label" for="email">Correo</label>
    <input type="text" class="form-control" id="email" placeholder="Escriba su Correo"> 
</div>
<div class="mb-3">
    <textarea class="form-control" placeholder="Que servicio desea?"></textarea>
</div>
<div class="d-flex justify-content-center">
    <input class="btn btn-primary" type="submit" value="Enviar">
</div>
</form>
</div>`

const notFoundpage = ` 
<div class="d-flex justify-content-center">
<h1 clas="text-center font-monospace text-break">404 page not found</h1>
</div>`

module.exports = {
    masterPage,
    homePage,
    valuesPage, 
    skillsPage, 
    projectsPage, 
    contactPage,
    notFoundpage
}