import './SimpleFooter.css'
const content: string =
  '图书馆开放时间：上午10:00-下午 09:00，节假日上午10:00-下午07:00，個别日子的特别開放時间（請参閱備註)上午 10:00-下午 09:00'

const SimpleFooter = () => {
  return <div className="SimpleFooter pr-5 pl-5 pb-5">{content}</div>
}

export default SimpleFooter
