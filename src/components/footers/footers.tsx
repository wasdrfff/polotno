import './style.css'
import inst from './images/inst.svg'
import pinterest from './images/pinterest.svg'
import telegram from './images/telegram.svg'
import phone from './images/phone.svg'
import email from './images/email.svg'
export const Footers = () => {
    return (
        <div className='footers'>
            <div className='footers__icons'>
            <img src={pinterest} alt='пинтерест' />
            <img src={inst} alt='инст' />
            <img src={telegram} alt='телега' />
            </div>
            
            <span>
                <img src={phone} alt='телефон' />
                +79126187687
            </span>
            <span>
                <img src={email} alt='почта' />
                malykhm@mail.ru
            </span>
            <span>
                © полотно 2021
            </span>
        </div>
    )
}