/*
 * Stimulus-reCAPTCHA
 *
 * Copyright (C) 2019 Boris Raicheff
 * All rights reserved
 */


import { Controller } from "stimulus";


export default class extends Controller {

  static get targets() {
    return ["token"]
  }

  connect() {

    const recaptcha = window.grecaptcha;

    // https://developers.google.com/recaptcha/docs/v3

    recaptcha.ready(() => {
      recaptcha.execute(this.data.get("site-key"), { action: this.data.get("action") }).then(token => {
        this.tokenTarget.value = token
      })
    })

  }

}


/* EOF */
