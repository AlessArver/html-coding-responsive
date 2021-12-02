import React from "react";
import clsx from "clsx";

import { useToggle } from "../../hooks/useToggle";

import { ReactComponent as SearchIcon } from "./assets/icons/SearchIcon.svg";

import s from "./SearchInput.module.sass";

export const SearchInput = ({ value, className, onChange }) => {
  const clicked = useToggle();

  return (
    <div className={clsx(s.SearchInputWrapper, className)}>
      {clicked.value && <div className={s.SearchInputLabel}>Начать поиск</div>}
      <div
        className={clsx(s.SearchInput, {
          [s.SearchInput_active]: clicked.value,
        })}
      >
        <input
          onFocus={clicked.onSet}
          onBlur={clicked.onUnset}
          onChange={onChange}
          value={value}
          placeholder={clicked.value ? "" : "Начать поиск"}
          className={s.SearchInputInput}
        />
        <div className={s.SearchInputButtonWrapper}>
          <button className={s.SearchInputButton}>
            {clicked.value && (
              <span className={s.SearchInputButtonText}>Найти</span>
            )}
            <SearchIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
