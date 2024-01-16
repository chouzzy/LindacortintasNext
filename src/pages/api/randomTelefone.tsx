
export default async (req,res) => {
   let numbers = ['551636372108', '551636212108']
   let randomIndex = Math.floor(Math.random() * 2)
   let telefone = numbers[randomIndex]
   res.status(200).json({number: `${telefone}`})
}
