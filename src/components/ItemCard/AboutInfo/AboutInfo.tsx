import React from 'react';
import './AboutInfo.scss';
import { Phone } from '../../../Types';
import { getSplitedGB } from '../../../utils/getSplitedGB';

type Props = {
  phone: Phone;
  selectedCapacity: string;
};

export const AboutInfo: React.FC<Props> = ({ phone, selectedCapacity }) => {
  const {
    description,
    screen,
    resolution,
    processor,
    ram,
    camera,
    zoom,
    cell,
  } = phone;

  return (
    <article className="About-info">
      <div className="About-info__about">
        <h2 className="About-info__about-header About-info__header">
          About
        </h2>

        <div className="About-info__description">
          {description.map(({ title, text }) => (
            <React.Fragment key={title}>
              <h3 className="">
                {title}
              </h3>
              <p>
                {text}
              </p>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="About-info__tech-specs">
        <h2 className="About-info__tech-specs-header About-info__header">
          Tech specs
        </h2>

        <div className="About-info-stats">
          <span>Screen</span>

          <span>Resolution</span>

          <span>Processor</span>

          <span>RAM</span>

          <span>Built in memory</span>

          <span>Camera</span>

          <span>Zoom</span>

          <span>Cell</span>

          <span>{screen}</span>

          <span>{resolution}</span>

          <span>{processor}</span>

          <span>{getSplitedGB(ram)}</span>

          <span>{getSplitedGB(selectedCapacity)}</span>

          <span>{camera}</span>

          <span>{zoom}</span>

          <span>{cell.join(' ')}</span>
        </div>
      </div>
    </article>
  );
};
