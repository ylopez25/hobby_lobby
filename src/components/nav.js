import React from 'react'
import './nav.css' 
import SvgIcon from '@mui/material/SvgIcon';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function nav() {
  return (
    <div className='nav'>
        <div>
            <HomeIcon color="beige" fontSize="large" />
        </div>
        <div>
            <button>P O S T</button>
        </div>
        <div>
            <button>S E T T I N G S</button>
        </div>

    </div>
  )
}
