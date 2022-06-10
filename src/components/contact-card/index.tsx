import "./style.scss";

export type TProps = {
  title: string;
  time: string;
  img: string;
  subtitle: string;
  days: string;
};

export const ContactCard = ({ title, time, img, subtitle, days }: TProps) => {
  return (
    <div className="contact-card">
      <span>{title}</span>
      <span>{subtitle}</span>
      <span>{days}</span>
      <span>{time}</span>
      <img src={img} alt="pict" />
    </div>
  );
};
