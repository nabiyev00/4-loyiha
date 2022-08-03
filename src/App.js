import React from 'react'
import './App.css';

function App() {


  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark text-white'>
        <div className="container px-4">
          <a className='navbar-brand' href="/">Start Bootstrap</a>
          <button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#navbarToggle'><span className="navbar-toggler-icon"></span></button>
          <div className='collapse navbar-collapse' id='navbarToggle'>
            <ul className='navbar-nav  mb-2 mb-lg-0  ms-auto'>
              <li className="nav-item">
                <a className='nav-link' href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className='nav-link' href="/">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className='nav-link' href="/">Contact</a>
              </li>
              <li>
                <a className='nav-link active' href="/">Blog</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
      <section className='bg-light py-5'>
        <div className='container text-center my-5'>
          <h1 className='fw-bolder'>Welcome to Blog Home!</h1>
          <p className='lead mb-0 '>A Bootstrap 5 starter layout for your next blog homepage</p>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='card mb-3'>
                <a href="#!">
                  <img className='card-img-top' src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="img" />
                </a>
                <div className='card-body'>
                  <p className='text-muted'>January 1, 2022</p>
                  <h2 className='card-title'>Featured Post Title</h2>
                  <p className='card-text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!
                  </p>
                  <a className='btn btn-primary' href="/">Read more →</a>
                </div>
              </div>
              <div className='row g-3'>
                <div className='col-12 col-lg-6'>
                  <div className='card'>
                    <a href="#!">
                      <img className='card-img-top' src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="img" />
                    </a>
                    <div className='card-body'>
                      <p className='text-muted'>January 1, 2022</p>
                      <h2 className='card-title'>Post Title</h2>
                      <p className='card-text'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.
                      </p>
                      <a className='btn btn-primary' href="/">Read more →</a>
                    </div>
                  </div>
                </div>
                <div className='col-12 col-lg-6'>
                  <div className='card'>
                    <a href="#!">
                      <img className='card-img-top' src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="img" />
                    </a>
                    <div className='card-body'>
                      <p className='text-muted'>January 1, 2022</p>
                      <h2 className='card-title'>Post Title</h2>
                      <p className='card-text'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.
                      </p>
                      <a className='btn btn-primary' href="/">Read more →</a>
                    </div>
                  </div>
                </div>
                <div className='col-12 col-lg-6'>
                  <div className='card'>
                    <a href="#!">
                      <img className='card-img-top' src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="img" />
                    </a>
                    <div className='card-body'>
                      <p className='text-muted'>January 1, 2022</p>
                      <h2 className='card-title'>Post Title</h2>
                      <p className='card-text'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.
                      </p>
                      <a className='btn btn-primary' href="/">Read more →</a>
                    </div>
                  </div>
                </div>
                <div className='col-12 col-lg-6'>
                  <div className='card'>
                    <a href="#!">
                      <img className='card-img-top' src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="img" />
                    </a>
                    <div className='card-body'>
                      <p className='text-muted'>January 1, 2022</p>
                      <h2 className='card-title'>Post Title</h2>
                      <p className='card-text'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam.
                      </p>
                      <a className='btn btn-primary' href="/">Read more →</a>
                    </div>
                  </div>
                </div>
              </div>
              <nav className=''>
                <hr />
                <ul className='pagination justify-content-center my-4'>
                  <li className="page-item disabled">
                    <buton className='page-link' tabIndex='-1' >Newer</buton>
                  </li>
                  <li className="page-item active">
                    <button className='page-link'>1</button>
                  </li>
                  <li className="page-item">
                    <button className='page-link'>2</button>
                  </li>
                  <li className="page-item">
                    <button className='page-link'>3</button>
                  </li>
                  <li className="page-item disabled">
                    <button className='page-link'>...</button>
                  </li>
                  <li className="page-item">
                    <button className='page-link'>15</button>
                  </li>
                  <li className="page-item">
                    <button className='page-link'>Older</button>
                  </li>
                </ul>
              </nav>
            </div>
            <div className='col-lg-4'>
              <div className='card mb-3'>
                <div className='card-header'>Search</div>
                <div className='card-body'>
                  <div className='input-group'>
                    <input className='form-control' type="text" placeholder='Enter search term...'/>
                    <button className='btn btn-primary'>Go!</button>
                  </div>
                </div>
              </div>
              <div className='card mb-3'>
                <div className='card-header'>Categories</div>
                <div className='card-body'>
                <div className='row'>
                <div className='col-sm-6'>
                    <ul className='list-unstyled'>
                      <li>
                        <a href="/">Web Design</a>
                      </li>
                      <li>
                        <a href="/">HTML</a>
                      </li>
                      <li>
                        <a href="/">Freebies</a>
                      </li>
                    </ul>
                  </div>
                  <div className='col-sm-6'>
                    <ul className='list-unstyled'>
                      <li>
                        <a href="/">JavaScript</a>
                      </li>
                      <li>
                        <a href="/">CSS</a>
                      </li>
                      <li>
                        <a href="/">Tutorials</a>
                      </li>
                    </ul>
                  </div>
                </div>
                </div>
              </div>
              <div className='card mb-3'>
                <div className='card-header'>Side Widget</div>
                <div className='card-body'>
                  <p className='card-text'>You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className='bg-dark py-4'>
        <div className='container text-center'>
          <p className='text-white'>Copyright © Your Website 2022</p>
        </div>
      </footer>
    </>
  );


}

export default App;
