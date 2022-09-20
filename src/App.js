
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='main'>
        <div className='center'>
          <div className='menu'>
            <div className='logo'>
              <h1> AdminDEP - Módulo de Laboratórios</h1>
            </div>
            <p className='logo-abaixo'>
            O AdminDEP é um software de sistema departamental, 
            e o gerenciamento dos laboratórios é uma função fundamental presente no AdminDep.
            </p>
          </div>
        </div>
      </div>
      
      <div className='funcao'>
      <h2> Funções principais do AdminDep - Módulo de Laboratórios </h2>
      </div>
      <div className='conteudo'>
        <div className='center'>
          <div className='conteudo-single'>
            <h3 className='distancia'>Calendário Geral</h3>
            <p className='cont'>
            Visualizar todas as reservas dos laboratórios do
             departamento em forma de calendário
            </p>
          </div>
          <div className='conteudo-single'>
            <h3 className='distancia'>Calendário Pessoal</h3>
            <p className='cont'>
            Visualizar todas as reservas relacionadas ao usuário em forma de calendário
            </p>
          </div>
          <div className='conteudo-single'>
            <h3 className='distancia'>Alocação Semestral de Reserva</h3>
            <p className='cont'>
            Alocação de todas as turmas do semestre pelo Chefe do departamento por meio do AdminDep
            </p>
          </div>
        </div>
      </div>

      <div className='conteudo'>
        <div className='center'>
          <div className='conteudo-single'>
            <h3 className='distancia'>Solicitar Reserva</h3>
            <p className='cont'>
            Solicite Reservas para moderação da secretaria do departamento 
            pelo AdminDep.
            </p>
          </div>
          <div className='conteudo-single'>
            <h3 className='distancia'>Reserva Direta</h3>
            <p className='conte'>
            Liberdade do Porfessor de cadastrar sua prórpria reserva diretamente no AdminDep
            </p>
          </div>
          <div className='conteudo-single'>
            <h3 className='distancia'>Gerenciar Laboratórios</h3>
            <p className='cont'>
            Cadastro e exibição de informações dos Laboratórios para todos os usuários
            </p>
          </div>
        </div>
      </div>
      
      <div className='visualização'>
        <div>
          <h2>Visualização de telas</h2>
        </div>
        <div>
            <img src='solicitacao-reserva.jpg'></img>
        </div>
      </div>
      <div className='contato'>
        <div className='centralizar'>
          <h2 className='distancia'>Contatos</h2>
          <p>Secretaria@dcomp.ufs.br</p>
        </div>
      </div>
    </div>
  );
}

export default App;
