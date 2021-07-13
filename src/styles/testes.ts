type User = {
  name: string
  email: string
  address: {
    city: string
    state?: string
  }
}

function showWelcomeMessage(user: User){
  return `Welcome ${user.name}, your e-mail is ${user.email}`
}

showWelcomeMessage({
  name: 'gabriel',
  email: 'johnDoe@.com',
  address: {
    city: 'nada',
  }
})