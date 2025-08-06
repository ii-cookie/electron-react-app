import './ProgrammePopUp.css'

interface Prop {
  image: string
  title: string
  qrcode: string
  details: string
}

const ProgrammePopUp = ({ image, title, qrcode, details }: Prop) => {
  return (
    <div className="ProgrammePopUp">
      <img src={image} alt={title} />
      <span>{title} </span>
      <img src={qrcode} alt="QRcode" />
      {details}
    </div>
  )
}

export default ProgrammePopUp
