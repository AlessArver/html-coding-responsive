import React from "react";

import { useInput } from "../../hooks/useInput";

import { ReactComponent as ArrowIcon } from "../../assets/icons/ArrowIcon.svg";
import ImageLarge from "./assets/images/imageLarge.png";
import ImageMedium from "./assets/images/imageMedium.png";
import ImageSmall from "./assets/images/imageSmall.png";

import s from "./HomePage.module.sass";

import { SearchInput } from "../../components/SearchInput/SearchInput";

export const HomePage = () => {
  const [searchVal, setSearchVal] = useInput();
  const isMobile = window.innerWidth <= 375;
  const isTablet = window.innerWidth <= 768;

  return (
    <div className={s.HomePage}>
      <div className={s.HomePageHeader}>
        {isTablet ? (
          <ArrowIcon />
        ) : (
          <SearchInput
            onChange={setSearchVal}
            value={searchVal}
            className={s.HomePageSearch}
          />
        )}
      </div>
      <div className={s.HomePageContent}>
        <div className={s.HomePageText}>
          <div className={s.HomePageText_small}>Представляем</div>
          <div className={s.HomePageText_large}>Все лучшее впереди</div>
        </div>
        <div className={s.HomePageImageWrapper}>
          <img
            src={isTablet ? ImageMedium : isMobile ? ImageSmall : ImageLarge}
            alt=""
            className={s.HomePageImage}
          />
        </div>
      </div>
    </div>
  );
};
