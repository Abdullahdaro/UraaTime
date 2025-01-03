import React from 'react'
import styled from 'styled-components'
import Center  from '@/components/Center'
import Image from './Image'
import Heading from './Heading'
import CallToAction from './CallToAction'

export const ChooseTransfer = () => {
  return (
    <Center>
    <div className="z-10 max-md:max-w-full font-volkhov">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d0470bb50f5ea4c69cdd14f3beaf338c77df1cbf3e34fd34584c41fe37b4780?placeholderIfAbsent=true&apiKey=7aacf0f7643c4dbcb219cdce1a623eb9" alt="Image Description" />
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto w-full text-base max-md:mt-10 max-md:max-w-full">
            <Heading title="Our transfer" subtitle="Choose your best Transfer" /> 
            <p className="font-semibold leading-6 max-md:max-w-full">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet</p> 
            <div className="flex gap-5 self-start mt-8 font-extrabold leading-none text-center">
              <CallToAction label="Book Now" primary onClick={() => {}} />
              <CallToAction label="Ask for price" onClick={() => {}} />
            </div>
          </div>
        </div>
      </div>
    </div>
    </Center>
  )
}
