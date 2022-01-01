const Button = ({ children, className, onclick }) => {
  return (
    <button 
    type="button" 
    className={className} 
    onclick={onclick}
    >
      {children}
    </button>
  )
}

export { Button };
