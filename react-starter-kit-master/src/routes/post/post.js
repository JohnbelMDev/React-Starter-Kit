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
import s from './Post.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Post({ title }) {
  useStyles(s);
  return (
    <div className={s.root}>
      <div className={s.container}>

        <h1>{title}</h1>





        <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
        </div>
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"/>
          <label class="custom-file-label" htmlfor="inputGroupFile01">Choose file</label>
        </div>
      </div>

      <div class="input-group mb-3">
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="inputGroupFile02"/>
          <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose file</label>
        </div>
        <div class="input-group-append">
          <span class="input-group-text" id="inputGroupFileAddon02">Upload</span>
        </div>
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon03">Button</button>
        </div>
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03"/>
          <label class="custom-file-label" for="inputGroupFile03">Choose file</label>
        </div>
      </div>

      <div class="input-group">
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04"/>
          <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
        </div>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Button</button>
        </div>
      </div>

        <input />

      </div>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
};
