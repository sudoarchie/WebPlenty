import React from 'react'
import { Navbar } from '../components/navbar'
import Image from 'next/image'
import Heroimg from '../../images/2.jpg'

function page() {
  return (
    <div><Navbar></Navbar>
    <div className="relative w-full bg-white mt-10">
      <div className="mx-auto sm:w-full md:max-w-[90%] lg:max-w-[80%]">
        
        <div className="rounded-lg bg-gray-200 p-4">  
          <Image
                  src={Heroimg}
                  className="aspect-[3/2] w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[400px]"
                  alt="Go Back"
                />
          
        </div>
      </div>
    </div>
    <div className='mx-auto sm:w-full md:max-w-[90%] lg:max-w-[80%]'>
        <div className=' mx-auto p-4'>
            <h1 className='text-4xl font-bold'>Headline</h1>
            <p className='py-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error consequatur obcaecati praesentium laboriosam quam inventore ipsa eius ducimus repellendus laborum sequi enim expedita, maiores, beatae, sapiente architecto sint saepe minus. Error facilis nam harum accusamus magni magnam, cumque quisquam sint doloremque excepturi molestiae consectetur eaque, perspiciatis laboriosam ab sed, quos sunt vitae optio eos dolorum. Labore voluptatem repudiandae accusamus non facere voluptatibus hic, assumenda dolor tempore? Aut, in velit! Repellat amet ipsam, sit perferendis recusandae omnis praesentium, assumenda ipsa magnam deserunt harum sequi vel exercitationem modi consequatur architecto! Laudantium fuga unde quas quibusdam voluptas nobis vitae recusandae id dolores autem odio deserunt minima ut modi, repellat a at vero. Sit cum, nihil aspernatur fugiat maiores quia nam corporis quod expedita dolore inventore tempore neque natus voluptatem necessitatibus at quo non esse modi. Reiciendis excepturi odit ex facere ab error, labore eius natus eaque maxime exercitationem, voluptatem illo neque iusto sapiente. Distinctio eos fuga debitis accusantium soluta adipisci ab sit fugit obcaecati, eveniet minus praesentium? Praesentium culpa inventore consequuntur illo quibusdam corporis, qui, rem labore omnis accusamus quae deleniti fugiat, ullam molestias officia. Maiores accusantium quod labore nesciunt totam earum voluptatem fuga nemo neque. Consequuntur rem cupiditate officiis incidunt labore. Quibusdam! </p>
        </div>
    </div>

    </div>
    
  )
}

export default page