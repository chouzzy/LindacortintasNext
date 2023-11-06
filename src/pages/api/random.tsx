
export default async (req,res) => {
   let numbers = ['5516991439381']
   let randomIndex = Math.floor(Math.random() * 1)
   let whatsNumber = numbers[randomIndex]
   res.status(200).json({number: `${whatsNumber}`})
}
