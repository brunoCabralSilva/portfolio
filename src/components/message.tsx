'use client'
import { useContext, useEffect, useState } from "react";
import emailjs from 'emailjs-com';
import contexto from "@/context/context";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BiMailSend } from "react-icons/bi";
import { VscError } from "react-icons/vsc";
import dotenv from 'dotenv';

dotenv.config();

export default function Message() {
  const { setSendMessage } = useContext(contexto);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [messageToUser, setMessageToUser] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const [errorName, setErrorName] = useState<boolean>(false);
  const [errorEmail, setErrorEmail] = useState<boolean>(false);
  const [type, setType] = useState<string>('');

  useEffect(() => {
    const userID: string | undefined = process.env.NEXT_PUBLIC_USER_ID;
    const templateID: string | undefined = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const serviceID: string | undefined = process.env.NEXT_PUBLIC_SERVICE_ID;

    console.log('userID: ' + userID);
    console.log('templateID: ' + templateID);
    console.log('serviceID: ' + serviceID);
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    const validate = /\S+@\S+\.\S+/;
    const vEmail = !email || !validate.test(email) || email === '';
    e.preventDefault();
    if (vEmail) {
      setErrorEmail(true);
      setType('error');
      setMessageToUser('Necessário preencher um email válido');
    } else if (name.length < 2) {
      setErrorName(true);
      setType('error');
      setMessageToUser('Necessário preencher um assunto com pelo menos 2 caracteres');
    } else if (message.length < 5) {
      setErrorMessage(true);
      setType('error');
      setMessageToUser('Necessário digitar uma mensagem com pelo menos 5 caracteres');
    } else {
      setErrorName(false);
      setErrorEmail(false);
      setErrorMessage(false);
      const userID: string | undefined = process.env.REACT_APP_USER_ID;
      // 'Pj9MQyLLkLjcAkfIU';
      const templateID: string | undefined = process.env.REACT_APP_TEMPLATE_ID;
      // 'template_vpmjsmf';
      const serviceID: string | undefined = process.env.REACT_APP_SERVICE_ID;
      // 'service_mb79wjx';
      try {
        if (serviceID && templateID && userID) {
          emailjs.sendForm(serviceID, templateID, e.target as HTMLFormElement, userID);
          (e.target as HTMLFormElement).reset();
        }
      } catch (error) {
        global.alert('erro: ' + error);
      }
      setName('');
      setEmail('');
      setMessage('');
      setErrorName(false);
      setErrorEmail(false);
      setErrorMessage(false);
      setMessageToUser('');
      setType('ok');
      setMessageToUser('E-mail enviado. Responderei o mais rápido possível!');
      setTimeout(() => setMessageToUser(''), 4000);
    }
    setTimeout(() => setMessageToUser(''), 4000);
  }

  return(
    <div className="w-full h-screen fixed top-0 left-0 bg-black/60 flex justify-center z-30 py-[5vh]">
      <div className="px-2 sm:px-0 w-11/12 sm:w-2/3 bg-white h-[90vh] mt-2 rounded-xl relative">
        <div className="flex items-center justify-between w-full px-2 py-2 top-0 right-0 h-[10vh]">
          <div className="text-black cursor-pointer font-bold duration-400 transition-colors text-base sm:text-lg leading-5 sm:pl-5">
            Envie uma Mensagem
          </div>
          <button
            type="button"
            className="text-4xl"
            onClick={ () => setSendMessage(false) }
          >
            <IoIosCloseCircleOutline /> 
          </button>
        </div>
        <hr />
        <form onSubmit={sendEmail} className="flex flex-col h-[80vh] pt-2 2xl:pt-0 px-2 sm:px-7 xl:px-7 justify-start w-full overflow-y-auto text-sm sm:text-base">
          <label
            className={`w-full flex flex-col text-left py-2 ${errorEmail ? 'text-red-500' : ''}`}
            htmlFor="from_email"
          >
            <span className="pr-2 pb-2">Email *</span>
            <input
              id="from_email"
              type="text"
              name="from_email"
              placeholder="email@gmail.com"
              value={email}
              onChange={ (e) => {
                setEmail(e.target.value);
                if (e.target.value.length === 0) setErrorEmail(true);
                else setErrorEmail(false);
              }}
              className={`w-full rounded font-normal text-base col-span-2 border p-3 ${errorEmail ? 'border-red-500' : 'border-gray-500' }`}
            />
          </label>
          <label
            className={`w-full flex flex-col text-left py-2 ${errorName ? 'text-red-500' : ''}`}
            htmlFor="from_name"
          >
            <span className="pr-2 pb-2">Assunto *</span>
            <input
              id="from_name"
              type="text"
              name="from_name"
              placeholder="Digite um assunto aqui"
              value={name}
              onChange={ (e) => {
                setName(e.target.value);
                if (e.target.value.length === 0) setErrorName(true);
                else setErrorName(false);
              }}
              className={`w-full rounded font-normal text-base col-span-2 border p-3 ${errorName ? 'border-red-500' : 'border-gray-500' }`}
            />
          </label>
          <label
            className={`w-full text-left py-2 ${errorMessage ? 'text-red-500' : 'text-black'}`}
            htmlFor="message"
          >
            Mensagem *
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            placeholder="Digite aqui sua mensagem"
            className={`border w-full rounded font-normal text-base p-2 col-span-2 resize-none ${errorMessage ? 'border-red-500' : 'border-gray-500' }`}
            value={message}
            onChange={ (e) => {
              setMessage(e.target.value)
              if (e.target.value.length === 0) setErrorMessage(true);
              else setErrorMessage(false);
            }}
          />
          <button
            type="submit"
            value="Submit"
            className="w-full text-center py-2 col-span-3 mt-5 border bg-[#0A66C2] hover:bg-[#004182] font-bold text-white transition-colors duration-500 hover:bg-send hover:border hover:border-gray-500 sm:mb-0"
            >
            Enviar
          </button>
          {
            messageToUser !== '' &&
            <div className={`flex flex-col sm:flex-row w-full items-center sm:items-start justify-center col-span-3 text-center font-bold mt-5 mb-5 ${type === 'ok' ? 'text-green-500 ' : 'text-red-500'}`}>
              { type === 'ok' ? <BiMailSend className="text-2xl mr-2" /> : <VscError className="text-2xl mr-2" /> } { messageToUser }
            </div>
          }
        </form>
      </div>
    </div>
  );
}