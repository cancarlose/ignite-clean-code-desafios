// Nomenclatura de variáveis

const users = [
  {
    title: 'User',
    followers: 5
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
]

export default async function getGithubUser(req, res) {
  const githubUser = String(req.query.username)

  if (!githubUser) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const response = await fetch(`https://api.github.com/users/${githubUser}`);

  if (response.status === 404) {
    return res.status(400).json({
      message: `User with username "${githubUser}" not found`
    })
  }

  const userGithubAccount = await response.json()

  const userOrderSortedByFollowers = users.sort((a, b) =>  b.followers - a.followers); 

  const category = userOrderSortedByFollowers.find(i => userGithubAccount.followers > i.followers)

  const userByCategory = {
    githubUser,
    category: category.title
  }

  return userByCategory
}

getGithubUser({ query: {
  username: 'cancarlose'
}}, {})