const userData = {
  name: 'John Doe',
  email: 'john@example.com',
  pass: 'password123',
  id: '1234'
};

function updateUserRoute(userData) {
  const { name, email, pass, id } = userData;

  updateUserController({ body: { name, email, pass}, params: { id }})
}

function updateUserController({ body: { name, email, pass}, params: { id }}) {
  userRepository.update({ body: { name, email, pass }, params: { id } })
}

const userRepository = {
  update: ({ body: { name, email, pass }, params: { id }}) => {console.log(`Atualizando usuário com ID ${id}`)},
}

updateUserRoute(userData)