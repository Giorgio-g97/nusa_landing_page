interface EmailTemplateProps {
  userName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  userName,
  email,
  message,
}) => (
  <div>
    <h1>Ciao, {userName}!</h1>
    <p>
      Ecco il tuo messaggio: <cite>{message}</cite>
    </p>

    <p>Risponderemo il prima possibile!</p>

    <p style={{color:"#FF0000"}}>A presto</p>
  </div>
);
