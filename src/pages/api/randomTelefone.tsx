
export default async (req,res) => {
   let numbers = [ '551636212108','551636372108']
   let randomIndex = Math.floor(Math.random() * 2)
   let telefone = numbers[randomIndex]
   res.status(200).json({number: `${telefone}`})
}
