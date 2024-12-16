'use client'
import { useContext, useState } from "react";
import emailjs from 'emailjs-com';
import contexto from "@/context/context";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BiMailSend } from "react-icons/bi";
import { VscError } from "react-icons/vsc";

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

  const sendEmail = (e: any) => {
    e.preventDefault();
    if (name === '' || email === '' || message === '') {
      if (name === '') setErrorName(true);
      else setErrorName(false);
      if (email === '') setErrorEmail(true);
      else setErrorEmail(false);
      if (message === '') setErrorMessage(true);
      else setErrorMessage(false);
      setMessageToUser('Existem campos que não foram preenchidos');
      setType('error');
      setTimeout(() => setMessageToUser(''), 4000);
    } else {
      const userID: any = 'service_s51wcgj';
      const templateID: any = 'template_o9l4rb8';
      const serviceID: any = 'To7wWxfrX9T3n3fLd';
      try {
        console.log(e.target)
      emailjs.sendForm(
        serviceID,
        templateID,
        e.target,
        userID,
        );
        e.target.reset();
      } catch (error: any) {
        global.alert(error.message);
      }
      setName('');
      setEmail('');
      setMessage('');
      setErrorName(false);
      setErrorEmail(false);
      setErrorMessage(false);
      setMessageToUser('');
      setType('ok');
      setMessageToUser('E-mail enviado! Em breve, responderemos o mais rápido possível!');
      setTimeout(() => setMessageToUser(''), 4000);
    }
  }

  return(
    <div className="w-full h-full fixed bottom-0 left-0 bg-black/60 flex justify-center z-30 pt-[10vh]">
      <div className="w-full px-2 sm:px-0 sm:w-2/3 bg-white mt-2 rounded-xl">
        <div className="flex items-center justify-end p-2">
          <button
            type="button"
            className="text-4xl"
            onClick={ () => setSendMessage(false) }
          >
            <IoIosCloseCircleOutline /> 
          </button>
        </div>
        <div className="px-5">
          <div className="flex flex-col justify-center">
            <h2 className="w-full text-center flex justify-center mt-4 z-20 mb-10">
              <span className="w-10/12 sm:w-1/2 md:w-1/2">
                Envie uma mensagem preenchendo os campos abaixo e responderei o mais rápido possível
              </span>
            </h2>
            <div className="flex items-center justify-center z-20">
              <form
                onSubmit={sendEmail}
                className="grid grid-cols-3 w-10/12 sm:w-1/2 md:w-1/2 pr-5"
              >
                <label
                  className={`w-full text-left py-2 ${errorName ? 'text-red-500' : ''}`}
                  htmlFor="from_name"
                >
                  Nome *
                </label>
                <input
                  id="from_name"
                  type="text"
                  name="from_name"
                  value={name}
                  onChange={ (e) => setName(e.target.value) }
                  className={`border w-full text-center col-span-2 py-1 ${errorName && 'border border-red-500' }`}
                />
                <label
                  className={`w-full text-left py-2 mt-5 ${errorEmail ? 'text-red-500' : 'text-black'}`}
                  htmlFor="user_email"
                >
                  Email *
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  className={`w-full text-center py-1 mt-5 col-span-2 ${errorEmail && 'border border-red-500' }`}
                  value={email}
                  onChange={ (e) => setEmail(e.target.value) }
                />
                <label
                  className={`w-full text-left py-2 mt-5 ${errorMessage ? 'text-red-500' : 'text-black'}`}
                  htmlFor="message"
                >
                  Mensagem *
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className={`w-full text-center py-1 mt-5 col-span-2 ${errorMessage && 'border border-red-500' }`}
                  value={message}
                  onChange={ (e) => setMessage(e.target.value) }
                />
                {
                  messageToUser !== '' &&
                  <div className={` flex items-center justify-center w-full col-span-3 text-center font-bold mt-8 ${type === 'ok' ? 'text-green-500' : 'text-red-500'}`}>
                    <span className="pr-3 text-3xl">
                      { type === 'ok' ? <BiMailSend /> : <VscError /> }
                    </span>
                    <span>
                      { messageToUser }
                    </span>
                  </div>
                }
                <button
                  type="submit"
                  value="Submit"
                  className="w-full text-center py-2 col-span-3 mt-8 border bg-white hover hover:font-bold transition-colors duration-500 hover:bg-send hover:border hover:border-black mb-10 sm:mb-0"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}