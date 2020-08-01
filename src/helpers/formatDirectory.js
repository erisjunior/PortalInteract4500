export default directory => {
  switch (directory) {
    case 'president':
      return 'Presidência'
    case 'treasurer':
      return 'Tesouraria'
    case 'secretary':
      return 'Secretaria'
    case 'adm':
      return 'Administração'
    case 'dqa':
      return 'Desenvolvimento do Quadro Associativo'
    case 'ph':
      return 'Projetos Humanitários'
    case 'ip':
      return 'Imagem Pública'
    case 'fr':
      return 'Fundação Rotária'

    default:
      break
  }
}