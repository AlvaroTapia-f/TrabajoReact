
const Footer = ()=>{
    return(
        <>
        <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Contacto</h5>
            <p>Dirección: 123 Calle Principal, Ciudad, País</p>
            <p>Teléfono: (123) 456-7890</p>
            <p>Email: contacto@ejemplo.com</p>
          </div>
          <div className="col-md-6">
            <h5>Enlaces Útiles</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Inicio</a></li>
              <li><a href="#" className="text-white">Sobre Nosotros</a></li>
              <li><a href="#" className="text-white">Servicios</a></li>
              <li><a href="#" className="text-white">Contacto</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-3">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Tu Nombre o Nombre de la Empresa. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
        </>
    )
}

export default Footer;