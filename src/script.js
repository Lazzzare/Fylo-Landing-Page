function validate() {
    Swal.fire({
        title: '<strong>ბოდიში მომითხოვია...</strong>',
        icon: 'info',
        html:
          'ვალიდაციას ცოტა დააგვიანდება <b> "საცობშია" </b>, ' +
          'შეიძლება ითქვას რომ (Coming soon)...' +
          '',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> ჯანდაბას!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonAriaLabel: 'Thumbs down'
      })
}