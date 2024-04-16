import React from 'react'

function Maps() {
  return (
    <div className="flex w-full" id='map'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14358.641346857103!2d84.21625664999999!3d25.880654349999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399260e2c0c770eb%3A0xc1cbc4b9e28753b3!2sBansdih%2C%20Uttar%20Pradesh%20277202!5e0!3m2!1sen!2sin!4v1694003827180!5m2!1sen!2sin" className='h-[450px] w-full'  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Maps