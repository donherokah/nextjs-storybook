import React from 'react'

interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
  }

const GetOTPButton = ({
    primary = false,
    size = 'medium',
    backgroundColor,    
    label,
    ...props
  }: ButtonProps) => {
  return (
    <div>
        {/* <input type='text' className='bg-[green] text-[white]'/> */}
        <button style={{background:backgroundColor,color:'white',width:'14rem',height:'3rem',borderRadius:'1rem'}}>
            GET OTP
        </button>
    </div>
  )
}

export default GetOTPButton