import sadPepper from '../../images/not-found-img.png';
import './NotFoundPage.scss';

export const NotFoundPage = () => (
    <div className="page-not-found">
      <h1 className="title">Page not found</h1>
      <img src={sadPepper} alt="error 404" className="page-not-found_img" />
    </div>
  );