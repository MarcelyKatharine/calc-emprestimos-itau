import { useState } from 'react'
import * as S from "./styles";
import UserIcon from "./assets/icons/user.svg"
import MessageIcon from "./assets/icons/message.svg"
import LogoEmpresa from "./assets/img/logo_itau_empresas.png"
import CheckIcon from "./assets/icons/check.png"
import UncheckIcon from "./assets/icons/uncheck.png"


function App() {

  return (
    <>
   
    <S.Container>
    <S.Header>
      <div>
      <a href="https://www.itau.com.br/" target="_blank">
      <img src="https://www.itau.com.br/media/dam/m/44c875ea1f4b31e2/webimage-logo_cmsless_varejo.png" alt="Logo do banco Itaú" />
      </a>
      <h1>Ativos PJ |</h1> 
      <h2>Calculadora de Empréstimos</h2>
      </div>
      <S.HeaderButtons>
      <a href="https://www.linkedin.com/in/marcely-katharine-280a46159/" target="_blank">
        <button> 
        <img src={UserIcon} alt="Botão com ícone de usuário" />
      </button>
      </a>

      <a href="https://github.com/MarcelyKatharine/calc-emprestimos-itau" target="_blank">
        <button>
        <img src={MessageIcon} alt="Botão com ícone de mensagem" />
      </button>
      </a>

      </S.HeaderButtons>
    </S.Header>

      <S.SectionForm>
        <S.Steps>
          <h3>1ª etapa:</h3>
          <h1>CNPJ</h1>
          <S.CustomInput 
          type="text"
          mask="99.999.999/9999-99"
          placeholder='Insira seu CNPJ'
          />
          <p>*Digite somente os números.</p>
          <S.FeedbackArea>
            {/* <S.CheckSection>
            <img src={CheckIcon} alt="Imagem do ícone check" />
            <p>Parabéns! <br/>
            Seu CNPJ tem crédito pré-aprovado em nosso sistema para empréstimo.</p>
          </S.CheckSection> */}

          {/* <S.UncheckSection>
            <img src={UncheckIcon} alt="Imagem do ícone uncheck" />
            <p>Que pena! <br/>
            Seu CNPJ possui restrições em nosso sistema para empréstimo. Por favor consulte seu gerente.</p>
          </S.UncheckSection> */}
          </S.FeedbackArea>

          

          <S.NextButton>Próximo</S.NextButton>
        </S.Steps>
        <S.Steps>
          <h3>2ª etapa:</h3>
          <h1>Valor do Empréstimo</h1>
          <S.CustomInput 
          type="text"
          mask=""
          placeholder='Insira o valor desejado' 
          />
          <p>*Digite somente os números.</p>
          <S.StepButtons>
            <button>Voltar</button>
            <button>Próximo</button>
          </S.StepButtons>
        </S.Steps>
        <S.Steps>
          <h3>3ª etapa:</h3>
          <h1>Número de Parcelas</h1>
          <S.CustomInput 
          type="text"
          mask=""
          placeholder='Insira o número de parcelas' 
          />
          <p>* Digite a quantidade de parcelas desejadas.</p>
          <S.StepButtons>
            <button>Voltar</button>
          <button>Calcular</button>
          </S.StepButtons>
        </S.Steps>
      </S.SectionForm>

      <S.ResultSection>
        <section>
        <img src="https://www.itau.com.br/media/dam/m/44c875ea1f4b31e2/webimage-logo_cmsless_varejo.png" alt="Logo do banco Itaú" />
        <p>FEITO PARA <span>VOCÊ</span> <br/>E <br/>PARA SUA <span>EMPRESA</span></p>
        </section>

        <section>
        <p>
          <ul>
            <li>
              Valor solicitado: R$ 10.000,00
            </li>
            <li>
              Valor de cada parcela: 12x R$ 1.000,00
            </li>
            <li>
              Valor final com encargos: R$15.000,00
            </li>
          </ul>
        </p>
        <h1>Acelere o crescimento da sua empresa!</h1>
        </section>

        <section>
          <a 
          href="https://www.itau.com.br/empresas/emprestimos-financiamentos" target="_blank">
            <button>Solicitar <br/>crédito
            </button>
            </a>
          <button>Repetir <br/>operação</button>
        </section>
      </S.ResultSection>

    <S.Footer>
    <img src={LogoEmpresa} alt="Imagem do logo do itau empresas" />
      <p>Desenvolvido por: <br/>Marcely Katharine <br/> 2022 ©</p>
    </S.Footer>
    </S.Container>
    </>
  )
}

export default App
