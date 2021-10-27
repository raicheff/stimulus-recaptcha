/*
 * Stimulus-reCAPTCHA
 *
 * Copyright (C) 2019 Boris Raicheff
 * All rights reserved
 */


import { Controller } from "@hotwired/stimulus";


export default class extends Controller {

  connect() {

    // https://developers.google.com/recaptcha/docs/v3

    grecaptcha.ready(() => {
      grecaptcha.execute(this.data.get("site-key"), { action: this.data.get("action") }).then(token => {
        this.element.value = token;
      })
    })

  }

}


/* EOF */
