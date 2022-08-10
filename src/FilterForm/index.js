import React from 'react';
import './FilterForm.css';

function FilterForm() {
  return (
    <form className="filterFormContainer">
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