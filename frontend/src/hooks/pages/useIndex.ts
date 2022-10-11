import { useState, useEffect } from 'react'
import { Professor } from '../../@types/professor';
import { ApiService } from "../../services/ApiService";

export function useIndex() {
  const [listaProfesssores, setLisraProfessores] = useState<Professor[]>([
    
  ]);

  useEffect(() => {
    ApiService.get('/professores').then((resposta) => {
      setLisraProfessores(resposta.data);
    })
  }, [])

  return {
    listaProfesssores
  }
}