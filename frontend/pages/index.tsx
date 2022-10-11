import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Professor } from '../src/@types/professor'
import Lista from '../src/components/Lista/Lista'
import { useIndex } from '../src/hooks/pages/useIndex'

const Home: NextPage = () => {
  const { listaProfesssores } = useIndex(); 

  return (
    <Box sx={{ backgroundColor: 'secondary.main' }}>
      <Lista professores={listaProfesssores}></Lista>
    </Box>
  )
}

export default Home
