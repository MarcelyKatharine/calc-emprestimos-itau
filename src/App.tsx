import { ChangeEvent, useEffect, useState } from 'react'
import * as S from "./styles";
import UserIcon from "./assets/icons/user.svg"
import MessageIcon from "./assets/icons/message.svg"
import LogoEmpresa from "./assets/img/logo_itau_empresas.png"
import CheckIcon from "./assets/icons/check.png"
import UncheckIcon from "./assets/icons/uncheck.png"

const invalidCnpj = ["11111111111111", "22222222222222", "33333333333333"]

function App() {
  const [cnpj, setCnpj] = useState<string>(''); 
  const [value, setValue] = useState<string>('');
  const [months, setMonths] = useState<string>('');
  const [isInvalid, setIsInvalid] = useState<boolean>(false);
  const [total, setTotal] = useState<number>();
  const [monthValue, setMonthValue] = useState<number>();
  const [showResult, setShowResult] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1);

  const calc = () => {
    let valueWithPerc: number | undefined = parseInt(value);

    for (let i = 0; i < parseInt(months); i++) {
      let tax: number = (valueWithPerc * 0.03)
      valueWithPerc = valueWithPerc + tax;
    }
    const finalValue: number = valueWithPerc
    setTotal(finalValue)
    setMonthValue(finalValue / parseInt(months));
    setShowResult(true)
  }

  useEffect(() => {
    if (cnpj?.length == 14 && invalidCnpj.includes(cnpj)) {
      setIsInvalid(true);
      return;
    }
    setIsInvalid(false);
  }, [cnpj]);

  const restart = () => {
    setCnpj('');
    setValue('');
    setMonths('');
    setTotal(undefined);
    setMonthValue(undefined);
    setShowResult(false);
    setStep(1);
  }

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

    <S.Body>

      <S.SectionForm>
        <S.Steps>
          <h3>1ª etapa:</h3>
          <h1>CNPJ</h1>
          <S.CustomInput 
          type="text"
          mask={cnpj?.length == 14 ? '99.999.999/9999-99' : ''}
          maxLength={18}
          value={cnpj}
          disabled={step !== 1 || isInvalid}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setCnpj(e.target.value)}
          placeholder='Insira seu CNPJ'
          />
          <p>*Digite somente os números.</p>
          <S.FeedbackArea>
            {cnpj?.length == 14 && !isInvalid && (
              <S.CheckSection>
              <img src={CheckIcon} alt="Imagem do ícone check" />
              <p>Parabéns! <br/>
              Seu CNPJ tem crédito pré-aprovado em nosso sistema para empréstimo.</p>
            </S.CheckSection>
            )}
            
            {cnpj?.length == 14 && isInvalid && (
              <S.UncheckSection>
              <img src={UncheckIcon} alt="Imagem do ícone uncheck" />
              <p>Que pena! <br/>
              Seu CNPJ possui restrições em nosso sistema para empréstimo. Por favor consulte seu gerente.</p>
            </S.UncheckSection>
            )}

          
          </S.FeedbackArea>
          <S.FirstStep>
            <button 
            disabled={step !== 1}
            onClick={() => restart()}>Limpar</button>
            <button
            disabled={step !== 1 || isInvalid || cnpj == ''}
            onClick={() => setStep(2)}
            >Próximo</button>
          </S.FirstStep>
        </S.Steps>
        <S.Steps>
          <h3>2ª etapa:</h3>
          <h1>Valor do Empréstimo</h1>
          <S.CustomInput 
          type="text"
          mask=""
          value={value}
          disabled={step !== 2}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
          placeholder='Insira o valor desejado' 
          />
          <p>*Digite somente os números.</p>
          <S.StepButtons>
            <button disabled={step !== 2} onClick={() => setStep(1)}>Voltar</button>
            <button disabled={step !== 2  || value == '' } onClick={() => setStep(3)}>Próximo</button>
          </S.StepButtons>
        </S.Steps>
        <S.Steps>
          <h3>3ª etapa:</h3>
          <h1>Número de Parcelas</h1>
          <S.CustomInput 
          type="text"
          mask=""
          value={months}
          disabled={step !== 3}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setMonths(e.target.value)}
          placeholder='Insira o número de parcelas' 
          />
          <p>* Digite a quantidade de parcelas desejadas.</p>
          <S.StepButtons>
            <button disabled={step !== 3} onClick={() => setStep(2)}>Voltar</button>
          <button
          onClick={() => calc()}
          disabled={step !== 3 || months == ''}
          >Calcular</button>
          </S.StepButtons>
        </S.Steps>
      </S.SectionForm>
          {showResult && (
            <S.ResultSection>
            <section>
            <img src="https://www.itau.com.br/media/dam/m/44c875ea1f4b31e2/webimage-logo_cmsless_varejo.png" alt="Logo do banco Itaú" />
            <p>FEITO PARA <span>VOCÊ</span> <br/>E <br/>PARA SUA <span>EMPRESA</span></p>
            </section>
    
            <section>
            <p>
              <ul>
                <li>
                  Valor solicitado: {parseInt(value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                </li>
                <li>
                  Valor de cada parcela: {months}x {monthValue?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                </li>
                <li>
                  Valor final com encargos: {total?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
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
              <button onClick={() => restart()}>Repetir <br/>operação</button>
            </section>
          </S.ResultSection>
          )}
      
      </S.Body>
      
    <S.Footer>
    <img src={LogoEmpresa} alt="Imagem do logo do itau empresas" />
      <p>Desenvolvido por: <br/>Marcely Katharine <br/> 2022 ©</p>
    </S.Footer>
    </S.Container>
    </>
  )
}

export default App
