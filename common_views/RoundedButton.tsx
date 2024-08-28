

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  variant: string;
  full?: boolean;
  className?: string;
}

const RoundedButton = ({ type, title, variant, full, className = '' }: ButtonProps) => {
  return (


    <button
    className={`rounded-[40px] ${variant} ${full ? 'w-full' : ''} ${className}`}
    type={type}
  >
       <span className="bold-16 whitespace-nowrap cursor-pointer">{title}</span>
    </button>
  )
}


export default RoundedButton