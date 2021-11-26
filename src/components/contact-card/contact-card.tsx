type TProps={
    title:string,
    time:string,
    img:string,
    subtitle:string,
    days:string
}
export const ContactCard = (props:TProps) => {
    return (
        <div className="contacts-page__blocks" >
            <div className="contacts-page__block">
                <span>
                {props.title}
                </span>
                <span>
                    {props.subtitle}
                </span>
                <span>
                    {props.days}
                </span>
                <span>
                    {props.time}
                </span>
                <img src={props.img} alt="pict" />
            </div>
        </div >
    )
}