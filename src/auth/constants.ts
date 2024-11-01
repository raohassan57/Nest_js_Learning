import { contains } from "class-validator"
import { User } from "src/user/user.entity"

export const JwtConstants = "8c879cd3d5d0d64f32e9b05bbbfbd749c41bc4f5f8903451ac6b41b210e2652b6dd7089c8496c63489db187d59b4600d12e215be7f98d405e427797a442e32f0b464cb23208162c9b37c95de3e5d811fbba9dc76ec6dc0244b95c320b97a7bccfd714c51315ef8b72acd144ce2e6409cb4b6fb6d5ea814aec225806638eb71999cc66ab0fd4f40ca04149371665619405694f5ff5c94b9590e83ae9a9a2eec020d4c350dd1d75c6a69887495f69b6a0a0fb755caf4de48d883926d526f96643093cb42f03f09f4bffef872fc383aa0dd76eeb3ab62fa4bb4dd3279fbbfb574254ceac7de11f25f024c5e0fb4b47efff722339fe3ea74b2664c83a5d41f182ae2"


export const role= {
  AndroidDeveloper: 'Android Developer',
  WebDeveloper: 'Web Developer',
  FrontEndDeveloper: 'FrontEnd Developer',
  BackEndDeveloper: 'BackEnd Developer'
}


export   const users : User[] = [{
  username: 'User1',
  password: "admin",
  email: "user1@gmail.com",
  role: role.AndroidDeveloper
},
{
  username: 'User2',
  password: "admin",
  email: "user2@gmail.com",
  role: role.WebDeveloper
},
{
  username: 'User3',
  password: "admin",
  email: "user3@gmail.com",
  role: role.FrontEndDeveloper
},
{
  username: 'User4',
  password: "admin",
  email: "user4@gmail.com",
  role: role.BackEndDeveloper
}
]