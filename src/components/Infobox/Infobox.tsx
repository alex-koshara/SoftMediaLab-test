import React, {useState} from 'react';
import './Infobox.scss';

type InfoboxProps = {
  description: string | undefined;
  className: string;
}

export const Infobox: React.FC<InfoboxProps> = ({ description, className }) => {
  const [clicked, setClicked] = useState(false);
  const infoboxClass = className ? `${className} infobox` : 'infobox';
  const divClass = clicked ? 'infobox__content infobox__content--active' : 'infobox__content';
  const iconClass = clicked ? 'infobox__icon infobox__icon--active' : 'infobox__icon';

  return description
    ? (
        <section className={infoboxClass}>
          <i
            className={iconClass}
            onClick={() => setClicked(!clicked)}>
          </i>
          <div className={divClass}>
            {description}
          </div>
        </section>
      )
  : null
}
