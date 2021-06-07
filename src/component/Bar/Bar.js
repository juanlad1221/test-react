import './style.css'

const Bar = () => {
    return (
        <div style={estilos}>
            <h3 className='Font'>Test KS</h3>
        </div>
    )
  }

  const estilos = {
      width:'100%',
      height:'60px',
      background:'#2980B9',
      display:'flex',
      alignItems:'center',
      color: 'white',
      //fontSize:'20px',
  }

  export default Bar