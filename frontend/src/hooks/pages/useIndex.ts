import { useState, useEffect } from 'react'
import { Professor } from '../../@types/professor';
import { ApiService } from "../../services/ApiService";

export function useIndex() {
  const [listaProfesssores, setLisraProfessores] = useState<Professor[]>([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [professorSelecionado, setProfessorSelecionado] = useState<Professor | null>(null)

  useEffect(() => {
    ApiService.get('/professores').then((resposta) => {
      setLisraProfessores(resposta.data);
    })
  }, []);

  function marcarAula() {
    if (professorSelecionado !== null) {
      if (validarDadosAula()) {
        ApiService.post('/professores/' + professorSelecionado.id + '/aulas', {
          nome, 
          email
        }).then(() => {
          setProfessorSelecionado(null);
          alert('Cadastrado com sucesso!')
        }).catch((error) => {
          alert(error.response?.data.message);
        });
      } else {
          alert('Preencha os dados corretamente')
      }
    }
  }

  function validarDadosAula() {
    return nome.length > 0 && email.length > 0;
  }

  return {
    listaProfesssores, 
    nome,
    setNome,
    email,
    setEmail,
    professorSelecionado, 
    setProfessorSelecionado, 
    marcarAula
  }
}