import { useState } from 'react'
import './App.css'

function App() {
    const [usuario, setUsuario] = useState('')

    function hadleUsuario(evento) {
        setUsuario.log(evento.target.value)
    }
    console.log(usuario)
  return (
   <>
    <header>
        <h1>Login</h1>
    </header>
    <main>
      <form action="">
        <div>
          <label htmlFor="usuario">Usuário</label>
          <input type="text" id="usuario" placeholder="Digite seu usuario" onChange={hadleUsuario}/>
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" placeholder="Digite sua senha" />
        </div>
        <button>Entrar</button>
      </form>
    </main>
   </>
  )
}

export default App
