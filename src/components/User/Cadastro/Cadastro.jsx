import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import StoreContext from 'components/Store/Context';
import UIButton from 'components/UI/Button/Button';

import './Cadastro.css';

function initialState() {
  return { user: '', password: '' };
}

function cadastro({ user, password }) {
  if (user === 'admin' && password === 'admin') {
    return { token: '1234' };
  }
  return { error: 'Usuário ou senha inválido' };
}

const UserCadastro = () => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value
    });
  }

  function onSubmit(event) {
    event.preventDefault();

    const { token, error } = cadastro(values);

    if (token) {
      setToken(token);
      return history.push('/');
    }

    setError(error);
    setValues(initialState);
  }

  return (
    <div className="bg-login">
      <div className="user-login">
      <div className="logo"></div>
        <h1 className="user-login__title">Cadastro</h1>
        <form onSubmit={onSubmit}>
          <div className="user-login__form-control">
            
            <input
              id="user"
              type="email"
              name="user"
              placeholder="Endereço de e-mail"
              onChange={onChange}
              value={values.user}
              required
            />
          </div>
          <div className="user-login__form-control">
            
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Senha"
              onChange={onChange}
              value={values.password}
              required
            />
          </div>
          <div className="user-login__form-control">
            
            <input
              id="cpf"
              type="text"
              name="cpf"
              placeholder="CPF"
              onChange={onChange}
              required
            />
          </div>
          <div className="user-login__form-control">
            
            <input
              id="nome"
              type="text"
              name="nome"
              placeholder="Nome"
              onChange={onChange}
              required
            />
          </div>
          <div className="user-login__form-control">
            
            <input
              id="sobrenome"
              type="text"
              name="sobrenome"
              placeholder="Sobrenome"
              onChange={onChange}
              required
            />
          </div>
          <div className="user-login__form-control">
            
            <input
              id="dt-nasc"
              type="date"
              name="dt-nasc"
              placeholder="Data de nascimento"
              onChange={onChange}
              required
            />
          </div>
          <div className="user-login__form-control">
            
            <input
              id="tel"
              type="tel"
              name="tel"
              placeholder="Telefone"
              onChange={onChange}
              required
            />
          </div>
          <p className="text-p-title">Gênero</p>
          <div class="div-radio">
            <div className="user-login__form-control">
              <label class="label-radio" for="genero-fem">
                <input
                  id="genero-fem"
                  type="radio"
                  name="genero-fem"
                  onChange={onChange}
                
                />Feminino
              </label>
            </div>
            <div className="user-login__form-control">
              <label class="label-radio" for="genero-masc">
                <input
                  id="genero-masc"
                  type="radio"
                  name="genero-masc"
                  onChange={onChange}
                  
                />Masculino
              </label>
            </div>
            <div className="user-login__form-control">
              <label class="label-radio" for="genero-outros">
                <input
                  id="genero-outros"
                  type="radio"
                  name="genero-outros"
                  onChange={onChange}
                  
                />Outros
              </label> 
            </div>
          </div> 
          {error && (
            <div className="user-login__error">{error}</div>
          )}
          <UIButton
            type="submit"
            theme="contained-green"
            className="user-login__submit-button"
            rounded
          >
            Cadastrar
          </UIButton>
        </form>
        <p className="text-p">Não está registrado? <span className="span-link">Inscreva-se agora</span></p>
      </div>
    </div>
  );
};

export default UserCadastro;
