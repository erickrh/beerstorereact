import React from 'react';
import './MoreProducts.css';

function MoreProducts() {
  return (
    <div className="flexContainer">
      <div className="moreProductsContainer">
        <div>
          <p>Sigue mercando</p>
          <h2>Vinos</h2>
        </div>
        <button type='button'>
          <svg width="24" height="24" viewBox="0 0 24 24" className='arrowRight'>
            <path fillRule="evenodd" clipRule="evenodd" d="M12.48 12.7521C12.8705 12.3616 12.8705 11.7284 12.48 11.3379L7.70708 6.56498C7.31655 6.17445 7.31655 5.54129 7.70708 5.15077L8.06063 4.79721C8.45115 4.40669 9.08432 4.40669 9.47484 4.79721L16.0164 11.3388C16.407 11.7293 16.407 12.3625 16.0164 12.753L14.9562 13.8132C14.956 13.8135 14.9556 13.8135 14.9553 13.8132V13.8132C14.9551 13.813 14.9547 13.813 14.9544 13.8132L9.47484 19.2928C9.08432 19.6833 8.45116 19.6833 8.06063 19.2928L7.70708 18.9392C7.31655 18.5487 7.31655 17.9156 7.70708 17.525L12.48 12.7521Z" fill="#0000A3"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export { MoreProducts };