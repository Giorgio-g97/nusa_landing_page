import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface GithubAccessTokenEmailProps {
  userName?: string;
  email?: string;
  message?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const GithubAccessTokenEmail = ({
  userName,
  email,
  message,
}: GithubAccessTokenEmailProps) => (
  <Html>
    <Head />
    <Preview>
      A fine-grained personal access token has been added to your account
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://scontent.fbri4-1.fna.fbcdn.net/v/t39.30808-6/395450645_707839821377676_8353917185838143491_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=z6tS4jfxb-kQ7kNvgFkdxFG&_nc_zt=23&_nc_ht=scontent.fbri4-1.fna&_nc_gid=A5nR-u4ZIgBtSnrdl2rCXAQ&oh=00_AYByS1B9XwLLXSXBPb8uA7rNwFJY6H4xlqpntfA6vJuVaQ&oe=67744664"
          width="32"
          height="32"
          alt="logo"
        />

        <Text style={title}>
          <strong>@{userName}</strong> Benvenuto in Nusa Creazioni!
        </Text>

        <Section style={section}>
          <Text style={text}>
            Ciao <strong>{userName}</strong>!
          </Text>
          <Text style={text}>
            Ecco il tuo messaggio: <strong>{message}</strong>
          </Text>
          <Text>Risponderemo il prima possibile</Text>
        </Section>
        <Text style={links}>
          <Link style={link}>Your security audit log</Link> ・{" "}
          <Link style={link}>Contact support</Link>
        </Text>
        <Text>A presto!</Text>

        <Text style={footer}>
          GitHub, Inc. ・88 Colin P Kelly Jr Street ・San Francisco, CA 94107
        </Text>
      </Container>
    </Body>
  </Html>
);

GithubAccessTokenEmail.PreviewProps = {
  userName: "alanturing",
} as GithubAccessTokenEmailProps;

export default GithubAccessTokenEmail;

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  maxWidth: "480px",
  margin: "0 auto",
  padding: "20px 0 48px",
};

const title = {
  fontSize: "24px",
  lineHeight: 1.25,
};

const section = {
  padding: "24px",
  border: "solid 1px #dedede",
  borderRadius: "5px",
  textAlign: "center" as const,
};

const text = {
  margin: "0 0 10px 0",
  textAlign: "left" as const,
};

const button = {
  fontSize: "14px",
  backgroundColor: "#28a745",
  color: "#fff",
  lineHeight: 1.5,
  borderRadius: "0.5em",
  padding: "12px 24px",
};

const links = {
  textAlign: "center" as const,
};

const link = {
  color: "#0366d6",
  fontSize: "12px",
};

const footer = {
  color: "#6a737d",
  fontSize: "12px",
  textAlign: "center" as const,
  marginTop: "60px",
};
