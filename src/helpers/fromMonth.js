export default month => {
  switch (month) {
    case 'Julho':
      return 6
    case 'Agosto':
      return 7
    case 'Setembro':
      return 8
    case 'Outubro':
      return 9
    case 'Novembro':
      return 10
    case 'Dezembro':
      return 11
    case 'Janeiro':
      return 0
    case 'Fevereiro':
      return 1
    case 'Março':
      return 2
    case 'Abril':
      return 3
    case 'Maio':
      return 4
    case 'Junho':
      return 5
    default:
      return 0
  }
}
