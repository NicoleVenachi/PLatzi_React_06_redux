import md5 from 'md5';

const gravatar = (email) => {
  const base = 'https://gravatar.com/avatar/';

  //  Formateo el eamil, quito espacio y paso a lowerCase
  const formattedEmail = (email).trim().toLowerCase();

  //creo el hash
  const hash = md5(formattedEmail, {encoding: 'binary'})

  return `${base} ${hash}`

}

export default gravatar