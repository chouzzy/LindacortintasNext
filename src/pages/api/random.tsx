
export default async (req,res) => {
   let numbers = ['5516991439381', '5516997097415','5516997092489','5516997093759']
   let randomIndex = Math.floor(Math.random() * 4)
   let whatsNumber = numbers[randomIndex]
   res.status(200).json({number: `${whatsNumber}`})
}
