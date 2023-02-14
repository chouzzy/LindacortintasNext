
export default async (req,res) => {
   let numbers = ['5516991439381','5516997093759','5516996092935','5516997092489',]
//    let numbers = ['5516996092936','5516997093759','5516996092935','5516991439381']
   let randomIndex = Math.floor(Math.random() * 4)
   let whatsNumber = numbers[randomIndex]
   res.status(200).json({number: `${whatsNumber}`})
}
