import { CabecalhoContainer, Logo } from "./Cabecalho.style";

const Cabecalho = () => {
  return(
    <div>
      <CabecalhoContainer>
        <div>
          <Logo src="/imagens/myteacher.png" />
        </div>

        <p>Encontre o professor perfeito!</p>
      </CabecalhoContainer>
    </div>
  )
}

export default Cabecalho;