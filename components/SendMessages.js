import React from 'react';
import Center from './Center';

function SendMessages() {
  return (
    <Center>
    <section className="flex flex-wrap gap-6 items-center justify-center px-8 py-12 leading-none bg-white shadow-2xl rounded-[34.583px] max-md:px-5">
      <div className="flex flex-col self-stretch my-auto min-w-[240px]">
        <header className="flex flex-col h-[83px] text-zinc-950 ">
          <h1 className="text-4xl font-semibold tracking-wide">
            Entrust your vacation choice to the experts
          </h1>
          <p className="mt-1.5 text-2xl font-light tracking-wide">
            Leave a request and receive a personal tour selection
          </p>
        </header>
        <form className="flex flex-wrap gap-2.5 items-start self-start mt-6 text-xl font-medium tracking-normal text-slate-500">
            <div className={`flex flex-col rounded-3xl`}>
                <label htmlFor={`input-Your name`} className="sr-only">Your name</label>
                <input
                    type="text"
                    id={`input-Your name`}
                    placeholder="Your name"
                    className="px-8 py-9 rounded-3xl bg-zinc-300 max-md:px-5 w-full"
                    aria-label="Your name"
                />
            </div>
            <div className={`flex flex-col rounded-3xl`}>
                <label htmlFor={`input-Phone Number`} className="sr-only">Phone number</label>
                <input
                    type="tel"
                    id={`input-Phone Number`}
                    placeholder="Phone Number"
                    className="px-8 py-9 rounded-3xl bg-zinc-300 max-md:px-5 w-full"
                    aria-label="Phone Number"
                />
            </div>
            <div className={`flex flex-col rounded-3xl`}>
                <label htmlFor={`input-Your Email`} className="sr-only">Your Email</label>
                <input
                    type="email"
                    id={`input-Your Email`}
                    placeholder="Your Email"
                    className="px-8 py-9 rounded-3xl bg-zinc-300 max-md:px-5 w-full"
                    aria-label="Your Email"
                />
            </div>
        </form>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/994fa969393e1ed09a097744ff7231eca8c6068c3bac2c6fe3676414b293f46c?placeholderIfAbsent=true&apiKey=7aacf0f7643c4dbcb219cdce1a623eb9"
        alt="Vacation destination"
        className="object-contain shrink-0 self-stretch my-auto aspect-[0.9] rounded-[32px] w-[239px]"
      />
    </section>
    </Center>
  );
}

export default SendMessages;