import { ReactElement } from 'react'
import './ProgrammePopUp.css'

interface Prop {
  image: string
  title: string
  qrcode: string
  details: ReactElement
}

const ProgrammePopUp = ({ image, title, qrcode, details }: Prop) => {
  return (
    <div className="ProgrammePopUp bg-white ">
      <div className="flex flex-col items-center gap-5">
        <div className="image-container w-9/10 h-[400px] rounded-2xl mt-[70px] overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover  " />
        </div>

        <h2 className="title max-w-4/5 font-semibold">{title}</h2>
        <img src={qrcode} alt="QR Code" className="qrcode object-contain" />
        <p className="details text-gray-600 text-left w-4/5  "> {details} </p>
      </div>
    </div>
  )
}

export default ProgrammePopUp
