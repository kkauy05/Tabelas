import React from 'react';
import './App.css';
import logoVobys from './assets/logo_vobys.jpeg';
import { FaUser, FaHandPaper, FaRegFileAlt, FaPrint, FaEye, FaTint, FaCalendarAlt } from 'react-icons/fa';

const App = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container">
      <header className="header">
        <img src={logoVobys} alt="Logo Vobys" className="logo" />
        <span className="user-info">
          <FaUser className="user-icon" /> Mariana Silva
        </span>
      </header>


      <div className="breadcrumb-container">
        <span className="left-arrow">&lt;</span>
        <span className="breadcrumb-title"><h3>Tabelas Básicas</h3></span>
        <span className="separator-line"></span>
        <FaHandPaper className="breadcrumb-icon" style={{ color: 'orange' }} />
        <span className="breadcrumb-text"><h3>Características Físicas</h3></span>
      </div>

      <div className="main-layout">
        <aside className="sidebar">
          <div className="menu">

            <div className="menu-item">
              <div className='box-menu'><FaHandPaper className="fisico" /></div> Características Físicas
            </div>

            <div className="raça">
              <div className="box-menu"><FaRegFileAlt className="Raça" /></div> Raças / Cores / Etnias
            </div>
            <div className="cores">
              <div className='box-menu'><FaRegFileAlt className="Cores" /></div> Cores dos Cabelos
            </div>
            <div className="sexos">
              <div className='box-menu'><FaRegFileAlt className="Sexos" /></div> Sexos
              </div>
              <div className="deficiencia">
              <div className='box-menu'><FaRegFileAlt className="Deficiencia" /></div> Tipos de Deficiências
              </div>
              <div className="sanguineo">
              <div className='box-menu'><FaTint className="sanguineo" /></div> Tipos Sanguíneos
              </div>
              <div className="consulta">
              <div className='box-menu'><FaPrint className="Consulta" /></div> Imprimir Consulta
              </div>
              <div className="cores-olhos">
              <div className='box-menu'><FaEye className="Cores-olhos" /></div> Cores dos Olhos
              </div>
              <div className="cutis">
              <div className='box-menu'><FaCalendarAlt className="Cutis" /></div> Cutis
              </div>

            </div>
        </aside>



        <main className="main-content">
          <h3>Adicionar</h3>

          <div className="form-container">
            <div className="header-container">

              <label>Raça / Cor / Etnia</label>
            </div>

            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nome</label>
                <input type="text" placeholder="Nome" />
              </div>
              <div className="form-group">
                <label>Código eSocial</label>
                <input type="text" placeholder="Código eSocial" />
              </div>
              <div className="form-group">
                <label>Código RAIS</label>
                <input type="text" placeholder="Código RAIS" />
              </div>
              <div className="form-group">
                <label>Código SEFIP</label>
                <input type="text" placeholder="Código SEFIP" />
              </div>
              <div className="form-group">
                <label>Código CAGED</label>
                <input type="text" placeholder="Código CAGED" />
              </div>
              <div className="form-buttons">
                <button type="button" className="cancel-button">Cancelar</button>
                <button type="submit" className="save-button">Gravar</button>
              </div>
            </form>
          </div>
        </main>

      </div>
    </div>
  );
};

export default App;
