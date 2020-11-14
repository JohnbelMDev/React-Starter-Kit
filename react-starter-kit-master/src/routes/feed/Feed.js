/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import useStyles from 'isomorphic-style-loader/useStyles';
import React from 'react';
import PropTypes from 'prop-types';
import s from './Feed.css';

// or less ideally
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';


export default function Feed({ title }) {
  useStyles(s);
  return (
    <>

    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>
        <div class="card" style={{width: "40rem"}}>
  <img src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" class="card-img-top" alt="..."style={{width: "40rem"}}/>
  <div className="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
   </div>
   <div class="card" style={{width: "40rem"}}>
<img src="https://images.unsplash.com/photo-1561736895-614d19d138f5?ixlib=rb-1.2.1&w=1000&q=80" class="card-img-top" alt="..."style={{width: "40rem"}}/>
<div className="card-body">
<h5 class="card-title">Card title</h5>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
<div class="card" style={{width: "40rem"}}>
<img src="https://mir-s3-cdn-cf.behance.net/projects/404/e9e4b599399275.Y3JvcCw0MDE2LDMxNDEsMCwxNDQx.jpg" class="card-img-top" alt="..."style={{width: "40rem"}}/>
<div className="card-body">
<h5 class="card-title">Card title</h5>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>        <div class="card" style={{width: "40rem"}}>
  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/76881080893473.5cee78c645e96.jpg" class="card-img-top" alt="..."style={{width: "40rem"}}/>
  <div className="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
   </div>        <div class="card" style={{width: "40rem"}}>
     <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/e59fa180893473.5cee78c6461b3.jpg" class="card-img-top" alt="..."style={{width: "40rem"}}/>
     <div className="card-body">
       <h5 class="card-title">Card title</h5>
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
      </div>        <div class="card" style={{width: "40rem"}}>
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/30778c80011347.5cd46529749eb.jpg" class="card-img-top" alt="..."style={{width: "40rem"}}/>
        <div className="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
         </div>        <div class="card" style={{width: "40rem"}}>
           <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/190fbe80011347.5cd4652974e46.jpg" class="card-img-top" alt="..."style={{width: "40rem"}}/>
           <div className="card-body">
             <h5 class="card-title">Card title</h5>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
            </div>        <div class="card" style={{width: "40rem"}}>
              <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/d4d60c54944973.596fe3ec49aa0.jpg" class="card-img-top" alt="..."style={{width: "40rem"}}/>
              <div className="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
               </div>
        <p>..yo...</p>
      </div>
    </div>
      </>
  );
}

Feed.propTypes = {
  title: PropTypes.string.isRequired,
};
