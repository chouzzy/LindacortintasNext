
export default async (req,res) => {
   let numbers = ['5516996092935','5516997092489','5516997097415']
   let randomIndex = Math.floor(Math.random() * 3)
   let whatsNumber = numbers[randomIndex]
   res.status(200).json({number: `${whatsNumber}`})
}
