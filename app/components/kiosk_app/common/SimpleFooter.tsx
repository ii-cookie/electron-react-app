import './SimpleFooter.css'

interface Content {
  FooterContent: string
}

const SimpleFooter = ({ FooterContent }: Content) => {
  return <div className="SimpleFooter pr-5 pl-5 pb-5">{FooterContent}</div>
}

export default SimpleFooter
