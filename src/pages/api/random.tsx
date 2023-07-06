
export default async (req,res) => {
   let numbers = ['5516997093759','5516997092489','5516991439381']
   let randomIndex = Math.floor(Math.random() * 3)
   let whatsNumber = numbers[randomIndex]
   res.status(200).json({number: `${whatsNumber}`})
}
