import { Button } from "@mui/material";
import { Descricao, Foto, Informaoes, ItemLista, ListaStyled, Nome, Valor } from "./Lista.style";

const Lista = () => {
  return (
    <ListaStyled>
      <ItemLista>
        <Foto src="https://github.com/elton-fonseca.png"></Foto>
        <Informaoes>
          <Nome>Elton Fonseca</Nome>
          <Valor>R$ 100,00 por hora</Valor>
          <Descricao>Aulas de programação</Descricao>
          <Button>Marcar Aula</Button>
        </Informaoes>
      </ItemLista>
      <ItemLista>
        <Foto src="https://github.com/elton-fonseca.png"></Foto>
        <Informaoes>
          <Nome>Elton Fonseca</Nome>
          <Valor>R$ 100,00 por hora</Valor>
          <Descricao>Aulas de programação</Descricao>
          <Button>Marcar Aula</Button>
        </Informaoes>
      </ItemLista>
    </ListaStyled>  
  )
}

export default Lista;