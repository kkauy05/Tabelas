import React from "react";
import "./RacasCoresEtnias.css";

const RacasCoresEtnias = () => {
  return (
    <div className="racas-container">
      
      <div className="header-section">
        <h1>Raças / Cores / Etnias</h1>
        <div className="header-buttons">
          <button className="btn print">+ Imprimir Consulta</button>
          <button className="btn add">+ Adicionar</button>
        </div>
      </div>

      
      <form className="form">
        <div className="form-row">
          <div className="form-group">
            <label>Nome</label>
            <input type="text" placeholder="Nome" />
          </div>
          <div className="form-group">
            <label>ESOCIAL</label>
            <input type="text" placeholder="ESOCIAL" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>RAIS</label>
            <input type="text" placeholder="RAIS" />
          </div>
          <div className="form-group">
            <label>SEFIP</label>
            <input type="text" placeholder="SEFIP" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>CAGED</label>
            <input type="text" placeholder="CAGED" />
          </div>
          <div className="form-group">
            <label>ID</label>
            <input type="text" placeholder="ID" />
          </div>
        </div>
        <button type="submit" className="btn search">Buscar</button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>eSocial</th>
            <th>RAIS</th>
            <th>SEFIP</th>
            <th>CAGED</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ color: 'blue' }}>Branca</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td style={{ color: 'blue' }}>Preta</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
          </tr>
          <tr>
            <td style={{ color: 'blue' }}>Parda</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
          </tr>
          <tr>
            <td style={{ color: 'blue' }}>Amarela</td>
            <td>4</td>
            <td>4</td>
            <td>4</td>
            <td>4</td>
            <td>4</td>
          </tr>
          <tr>
            <td style={{ color: 'blue' }}>Indígena</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
          </tr>
          <tr>
            <td style={{ color: 'blue' }}>Não Informado</td>
            <td>6</td>
            <td>6</td>
            <td>6</td>
            <td>6</td>
            <td>6</td>
          </tr>
        </tbody>
      </table>
      <div className="Final"></div>
    </div>
  );
};

export default RacasCoresEtnias;
