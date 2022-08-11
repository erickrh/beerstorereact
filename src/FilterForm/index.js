import React from 'react';
import './FilterForm.css';

function FilterForm() {
  return (
    <form className="filterFormContainer">

      {/* Close form icon */}
      <div className="closeForm">
        <svg width="14" height="14" viewBox="0 0 14 14">
          <path fillRule="evenodd" clipRule="evenodd" d="M12.8845 2.51359C13.275 2.12307 13.275 1.4899 12.8845 1.09938L12.8256 1.04045C12.435 0.649928 11.8019 0.649927 11.4114 1.04045L7.66962 4.78218C7.2791 5.17271 6.64593 5.17271 6.25541 4.78218L2.51368 1.04045C2.12315 0.649928 1.48999 0.649928 1.09946 1.04045L1.04054 1.09938C0.650012 1.4899 0.650012 2.12307 1.04054 2.51359L4.78227 6.25532C5.17279 6.64585 5.17279 7.27901 4.78227 7.66954L1.04045 11.4114C0.649927 11.8019 0.649928 12.435 1.04045 12.8256L1.09938 12.8845C1.4899 13.275 2.12307 13.275 2.51359 12.8845L6.25541 9.14268C6.64593 8.75215 7.2791 8.75215 7.66962 9.14268L11.4114 12.8845C11.802 13.275 12.4351 13.275 12.8256 12.8845L12.8846 12.8256C13.2751 12.435 13.2751 11.8019 12.8846 11.4114L9.14276 7.66954C8.75224 7.27901 8.75223 6.64585 9.14276 6.25532L12.8845 2.51359Z" fill="#101111"/>
        </svg>
      </div>

      <div className="filterForm">
        <h3>Filtros</h3>

        {/* LineDivide */}
        <svg height="1" width="100%" viewBox="0 0 100 1"  preserveAspectRatio="none">
          <rect width="345" height="1" fill="#E5E5E5"/>
        </svg>

        <div className="beerNameFlex">
          <p>Rubia</p>
          <input type="checkbox" name="rubia" id="rubia" />
        </div>
        
        {/* LineDivide */}
        <svg height="1" width="100%" viewBox="0 0 100 1"  preserveAspectRatio="none">
          <rect width="345" height="1" fill="#E5E5E5"/>
        </svg>

        <div className="beerNameFlex">
          <p>Morena</p>
          <input type="checkbox" name="morena" id="morena" />
        </div>

        {/* LineDivide */}
        <svg height="1" width="100%" viewBox="0 0 100 1"  preserveAspectRatio="none">
          <rect width="345" height="1" fill="#E5E5E5"/>
        </svg>

        <div className="beerNameFlex">
          <p>Roja</p>
          <input type="checkbox" name="roja" id="roja" />
        </div>

        {/* LineDivide */}
        <svg height="1" width="100%" viewBox="0 0 100 1"  preserveAspectRatio="none">
          <rect width="100%" height="1" fill="#E5E5E5"/>
        </svg>
      </div>

      <div className="buttonsContainer">
        <button className='FilterForm-cleanButton'>
          <p>limpiar</p>
        </button>
        <button type='submit' className='FilterForm-filterButton'>
          <p>filtrar</p>
          <svg width="19" height="19" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.10882 4.83059C4.93001 4.60261 4.9764 4.27779 5.21243 4.10508C5.30561 4.0369 5.41931 4 5.53621 4H19.4638C19.7599 4 20 4.23186 20 4.51787C20 4.63077 19.9618 4.74059 19.8912 4.83059L13.8405 12.5448V18.4821C13.8405 18.5843 13.8091 18.6843 13.7504 18.7693C13.5861 19.0073 13.2533 19.0716 13.0069 18.913L11.3983 17.8772C11.2492 17.7812 11.1596 17.6195 11.1596 17.4463V12.5448L5.10882 4.83059Z" fill="#FFFFFF"/>
          </svg>
        </button>
      </div>
    </form>
  );
}

export { FilterForm };